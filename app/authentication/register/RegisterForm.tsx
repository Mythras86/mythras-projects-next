'use client';

import { useActionState } from "react";
import FormInput from "../../../components/forms/FormInput";
import { userRegister } from "./userRegister";
import Form from "next/form";
import FormErrors from "@/components/forms/FormErrors";
import FormSubmit from "@/components/forms/FormSubmit";
import LoadingSpinner from "@/components/spinners/LoadingSpinner";

export default function RegisterForm() {

  const [formState, formAction, formPending] = useActionState(userRegister, {errors: null})

  return (
    <Form action={formAction}>
      <FormErrors errors={formState.errors}></FormErrors>

      <FormInput label='User Name' id='name' autoComplete='name' type='text' defaultValue={formState.enteredValues?.name}/>
      <FormInput label='Email Address' id='email' autoComplete='email' type='email' defaultValue={formState.enteredValues?.email}/>
      <FormInput label='Password' id='pass' autoComplete='current-password' type='password' defaultValue={formState.enteredValues?.pass}/>

      <LoadingSpinner isLoading={formPending} >
        <FormSubmit submitText="Register" resetText="Reset"></FormSubmit>
      </LoadingSpinner>
    </Form>
  );
}