'use client';

import { useActionState } from "react";
import AuthForm from "../authentication/components/AuthForm";
import Input from "../authentication/components/Input";
import { contactMe } from "./contactMe";

export default function ContactForm() {

  const [formState, formAction, formPending] = useActionState(contactMe, {errors: null})

  return (
    <AuthForm myState={formState} myActions={formAction} myPending={formPending} title={'Contact Me'}>
      <Input label='Your Name' id='name' autoComplete='name' type='text' defaultValue={formState.enteredValues?.name}/>
      <Input label='Description' id='desc' type='text' defaultValue={formState.enteredValues?.desc}/>
      <Input label='Email Address' id='email' autoComplete='email' type='email' defaultValue={formState.enteredValues?.email}/>
      <label htmlFor="message" className="neonWhite text2 margTop1">Message</label>
      <textarea className="text2" name="message" id="message" defaultValue={formState.enteredValues?.message}
      cols={40} rows={10} placeholder="Your message goes here"
      ></textarea>
    </AuthForm>
  );
}