'use client'

import Input from '@/components/auth/Input';
import Link from 'next/link';
import { useActionState } from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { userSignIn } from './userSignIn';

export default function Belepes() {

  const [formState, formAction, formPending] = useActionState(userSignIn, {errors: null});

  return (
    <AuthForm title={'Belépés'} myState={formState} myActions={formAction} myPending={formPending}>
      <div className="buttonCont right">
        <Link className='neonOrange text2 margBott1' href="/signup">Ha még nem regisztráltál, kattints ide!</Link>
      </div>

      <Input label='Email Cím' id='email' autoComplete='email' type='email' defaultValue={formState.enteredValues?.email}/>
      <Input label='Jelszó' id='pass' autoComplete='current-password' type='password' defaultValue={formState.enteredValues?.pass}  />
    </AuthForm>
  );
}