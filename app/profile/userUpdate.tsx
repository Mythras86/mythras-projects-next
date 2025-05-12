import { updateUser } from "@/app/api/users/users.route";
import { hasMinLength, isNotEmpty } from "../authentication/components/validation";
import { UserDto } from "@/app/api/users/user.dto";

export async function userUpdate(prevFormState: any, formData: any) {

  let errors = [];

  const user: UserDto = {
    name: formData.get('name'),
    email: formData.get('email')
  }

  if (!isNotEmpty(user.name!) || !hasMinLength(user.name!, 4)) {
    errors.push('Hibás név, legalább 4 karakter hosszúnak kell lennie!');
  }

  if (errors.length > 0) {
    return {errors, enteredValues: {
      name
    }};
  }

  const res = await updateUser(user);

  if (res.error) {
    return res.error;
  }

  return {errors: null};

}