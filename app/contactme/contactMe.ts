import { ContactDto } from "../api/contactme/contact.dto";
import { sendEmail } from "../api/nodemailer/send-email";
import { isNotEmpty, hasMinLength, isEmail, errorMessage } from "../../components/forms/formValidation";

export async function contactMe(prevFormState: any, formData: any) {

  let errors = [];

  const name = formData.get('name');
  const subject = formData.get('subject');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!isNotEmpty(name) || !hasMinLength(name, 4)) {
    errors.push(errorMessage('name', 4));
  }
  if (!isNotEmpty(subject)) {
    errors.push(errorMessage('subject'));
  }
  if (!isEmail(email)) {
    errors.push(errorMessage('email'));
  }
  if (!isNotEmpty(message) || !hasMinLength(message, 4)) {
    errors.push(errorMessage('message', 4));
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

  sendEmail({name, subject, email, message})
  
  return {errors: null};
}