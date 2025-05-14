import mongoose from "mongoose";

export interface IContact extends mongoose.Document {
  name: string;
  subject: string;
  email: string;
  message: string;
}

const ContactSchema = new mongoose.Schema<IContact>({
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

const Contact = mongoose.models?.Contact || mongoose.model<IContact>("Contact", ContactSchema);
export default Contact;