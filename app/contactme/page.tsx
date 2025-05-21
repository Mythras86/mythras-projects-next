import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Contact Me via email",
};


export default function ContactMe() {


  return (
    <main>
      <h1>Contact Me</h1>
      <ContactForm></ContactForm>
    </main>
  );
}