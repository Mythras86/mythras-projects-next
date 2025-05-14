import { ContactDto } from "../api/contactme/contact.dto";
import { addContact } from "../api/contactme/contact.route";
import { sendEmail } from "../api/nodemailer/send-email";
import { isNotEmpty, hasMinLength, isEmail } from "../authentication/components/validation";

export async function contactMe(prevFormState: any, formData: any) {

  let errors = [];

  const name = formData.get('name');
  const subject = formData.get('subject');
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
      subject,
      email,
      message
    }};
  }

  const newMessage: ContactDto = {
    name,
    subject,
    email,
    message
  }

  addContact(newMessage);
  
  return {errors: null};
}