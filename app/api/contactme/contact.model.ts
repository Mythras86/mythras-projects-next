import mongoose from "mongoose";
import { ContactDto } from "./contact.dto";

export interface ContactModel extends mongoose.Document, ContactDto {}

const ContactSchema = new mongoose.Schema<ContactModel>({
  name: {
    type: String,
    required: [true, "Adj meg egy nevet!"],
  },
  subject: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Adj meg egy email címet!"],
    unique: true
  },
  message: {
    type: String,
    required: [true, "Adj meg egy jelszót!"],
  },
});

const Contact = mongoose.models?.Contact || mongoose.model<ContactModel>("Contact", ContactSchema);
export default Contact;