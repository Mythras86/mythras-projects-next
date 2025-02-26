import { signIn } from "next-auth/react";
import { hasMinLength, isEmail, isNotEmpty } from "./validation";

export async function belepes(prevFormState: any, formData: any) {

  let errors = [];

  const email = formData.get('email');
  const pass = formData.get('pass');

  if (!isEmail(email)) {
    errors.push('Hibás email cím!');
  }
  if (!isNotEmpty(pass) || !hasMinLength(pass, 4)) {
    errors.push('Hibás jelszó, legalább 4 karakter hosszúnak kell lennie!');
  }

  if (errors.length > 0) {
    return {errors, enteredValues: {
      email,
      pass
    }};
  }
    
  const res = await signIn("credentials", {
    email,
    pass
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