'use client';

import { useActionState } from "react";
import AuthForm from "../components/AuthForm";
import Input from "../components/Input";
import { userSignIn } from "./userSignIn";

export default function SignInForm() {

  const [formState, formAction, formPending] = useActionState(userSignIn, {errors: null})

  return (
    <AuthForm myState={formState} myActions={formAction} myPending={formPending} title={'Sign In'}>
      <Input label='Email Address' id='email' autoComplete='email' type='email' defaultValue={formState.enteredValues?.email}/>
      <Input label='Password' id='pass' autoComplete='current-password' type='password' defaultValue={formState.enteredValues?.pass}  />
    </AuthForm>
  );
}