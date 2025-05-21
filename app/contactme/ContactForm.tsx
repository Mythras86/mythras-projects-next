'use client';

import { useActionState } from "react";
import FormInput from "../../components/forms/FormInput";
import { contactMe } from "./contactMe";
import Form from "next/form";
import FormErrors from "@/components/forms/FormErrors";
import FormSubmit from "@/components/forms/FormSubmit";
import LoadingSpinner from "@/components/spinners/LoadingSpinner";

export default function ContactForm() {

  const [formState, formAction, formPending] = useActionState(contactMe, {errors: null})

  return (
    <Form action={formAction} id="contactForm">
      <FormErrors errors={formState.errors}></FormErrors>

      <FormInput label='Your Name' id='name' autoComplete='name' type='text' defaultValue={formState.enteredValues?.name}/>
      <FormInput label='Subject' id='subject' type='text' defaultValue={formState.enteredValues?.subject}/>
      <FormInput label='Email Address' id='email' autoComplete='email' type='email' defaultValue={formState.enteredValues?.email}/>
      <label htmlFor="message" className="neonWhite text2 margTop1">Message</label>
      <textarea className="text2 margTop1" name="message" id="message" defaultValue={formState.enteredValues?.message}
      cols={40} rows={10} placeholder="Your message goes here"
      ></textarea>

      <LoadingSpinner isLoading={formPending}>
        <FormSubmit submitText="Send Message" resetText="Reset"></FormSubmit>
      </LoadingSpinner>
    </Form>
  );
}