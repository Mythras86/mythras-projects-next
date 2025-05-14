import { ContactDto } from "../api/contactme/contact.dto";
import { addContact } from "../api/contactme/contact.route";
import { isNotEmpty, hasMinLength, isEmail } from "../authentication/components/validation";

export async function contactMe(prevFormState: any, formData: any) {

  let errors = [];

  const name = formData.get('name');
  const desc = formData.get('desc');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!isNotEmpty(name) || !hasMinLength(name, 4)) {
    errors.push('Hibás név, legalább 4 karakter hosszúnak kell lennie!');
  }
  if (!isEmail(email)) {
    errors.push('Hibás email cím!');
  }
  if (!isNotEmpty(message) || !hasMinLength(message, 4)) {
    errors.push('Hibás üzenet, legalább 4 karakter hosszúnak kell lennie!');
  }
    
  if (errors.length > 0) {
    return {errors, enteredValues: {
      name,
      desc,
      email,
      message
    }};
  }

  const newMessage: ContactDto = {
    name,
    desc,
    email,
    message
  }

  addContact(newMessage);
  
  return {errors: null};
}