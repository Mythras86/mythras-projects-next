'use client';

import { useActionState } from "react";
import Form from "../../../components/forms/Form";
import Input from "../../../components/forms/Input";
import { userSignUp } from "./userSignUp";

export default function SignUpForm() {

  const [formState, formAction, formPending] = useActionState(userSignUp, {errors: null})

  return (
    <Form myState={formState} myActions={formAction} myPending={formPending} title={'Sign Up'}>
      <Input label='User Name' id='name' autoComplete='name' type='text' defaultValue={formState.enteredValues?.name}/>
      <Input label='Email Address' id='email' autoComplete='email' type='email' defaultValue={formState.enteredValues?.email}/>
      <Input label='Password' id='pass' autoComplete='current-password' type='password' defaultValue={formState.enteredValues?.pass}/>
    </Form>
  );
}