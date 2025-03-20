'use client'

import Input from '@/components/auth/Input';
import { useActionState } from 'react';
import Link from 'next/link';
import AuthForm from '../../components/auth/AuthForm';
import { userSignUp } from './userSignUp';

export default function Regisztracio() {

  const [formState, formAction, formPending] = useActionState(userSignUp, {errors: null})

  return (
    <AuthForm myState={formState} myActions={formAction} myPending={formPending} title={'Regisztráció'}>
      <div className="buttonCont right">
        <Link className='neonOrange text2 center margBott1' href="/signin">Ha már regisztráltál, lépj be!</Link>
      </div>
      <Input label='Felhasználónév' id='name' autoComplete='name' type='text' defaultValue={formState.enteredValues?.name}/>
      <Input label='Email Cím' id='email' autoComplete='email' type='email' defaultValue={formState.enteredValues?.email}/>
      <Input label='Jelszó' id='pass' autoComplete='current-password' type='password' defaultValue={formState.enteredValues?.pass}/>
    </AuthForm>
  );
}