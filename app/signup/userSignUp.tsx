import { isNotEmpty, hasMinLength, isEmail } from "../../components/auth/validation";
import { addUser } from "@/app/api/users/users.route";
import { UserDto } from "@/app/api/users/user.dto";

export async function userSignUp(prevFormState: any, formData: any) {
  
  let errors = [];
  const name = formData.get('name');
  const email = formData.get('email');
  const pass = formData.get('pass');
  
  if (!isNotEmpty(name) || !hasMinLength(name, 4)) {
    errors.push('Hibás név, legalább 4 karakter hosszúnak kell lennie!');
  }
  if (!isEmail(email)) {
    errors.push('Hibás email cím!');
  }
  if (!isNotEmpty(pass) || !hasMinLength(pass, 4)) {
    errors.push('Hibás jelszó, legalább 4 karakter hosszúnak kell lennie!');
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