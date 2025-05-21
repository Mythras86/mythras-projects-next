'use client';

import { useActionState } from "react";
import FormInput from "../../../components/forms/FormInput";
import { userLogin } from "./userLogin";
import Form from "next/form";
import FormErrors from "@/components/forms/FormErrors";
import FormSubmit from "@/components/forms/FormSubmit";
import LoadingSpinner from "@/components/spinners/LoadingSpinner";

export default function LoginForm() {

  const [formState, formAction, formPending] = useActionState(userLogin, {errors: null})

  return (
    <Form action={formAction}>
      <FormErrors errors={formState.errors}></FormErrors>

      <FormInput label='Email Address' id='email' autoComplete='email' type='email' defaultValue={formState.enteredValues?.email}/>
      <FormInput label='Password' id='pass' autoComplete='current-password' type='password' defaultValue={formState.enteredValues?.pass}  />

      <LoadingSpinner isLoading={formPending}>
        <FormSubmit submitText="Login" resetText="Reset"></FormSubmit>
      </LoadingSpinner>
    </Form>
  );
}