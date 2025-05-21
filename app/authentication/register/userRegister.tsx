import { isNotEmpty, hasMinLength, isEmail, errorMessage } from "../../../components/forms/formValidation";
import { addUser } from "@/app/api/users/users.route";
import { UserDto } from "@/app/api/users/user.dto";

export async function userRegister(prevFormState: any, formData: any) {
  
  let errors = [];
  const name = formData.get('name');
  const email = formData.get('email');
  const pass = formData.get('pass');
  
  if (!isNotEmpty(name) || !hasMinLength(name, 4)) {
    errors.push(errorMessage('name', 4));
  }
  if (!isEmail(email)) {
    errors.push(errorMessage('email'));
  }
  if (!isNotEmpty(pass) || !hasMinLength(pass, 4)) {
    errors.push(errorMessage('password', 4));
  }
  
  if (errors.length > 0) {
    return {errors, enteredValues: {
      name,
      email,
      pass
    }};
  }

  const userReg: UserDto = {
    name,
    email,
    pass
  };
      
  await addUser(userReg);
  return {errors: null};
}