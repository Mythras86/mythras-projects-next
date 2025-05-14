import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: 'Contact Me',
};

export default function ContactMe() {


  return (
    <ContactForm></ContactForm>
  );
}