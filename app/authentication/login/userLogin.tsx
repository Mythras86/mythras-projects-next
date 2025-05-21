import { signIn } from "next-auth/react";
import { errorMessage, hasMinLength, isEmail, isNotEmpty } from "../../../components/forms/formValidation";

export async function userLogin(prevFormState: any, formData: any) {

  let errors = [];

  const email = formData.get('email');
  const pass = formData.get('pass');

  if (!isEmail(email)) {
    errors.push(errorMessage('email'));
  }
  if (!isNotEmpty(pass) || !hasMinLength(pass, 4)) {
    errors.push(errorMessage('password', 4));
  }

  if (errors.length > 0) {
    return {errors, enteredValues: {
      email,
      pass
    }};
  }
    
  const res = await signIn("credentials", {
    email,
    pass,
    redirectTo: '/'
  });


  if (res?.error) {
    errors.push(res?.error);
    return {errors, enteredValues: {
      email,
      pass
    }};
  } else {
    return {errors: null};
  }
}