'use client'

import Input from '@/components/Input';
import { belepes } from '../actions/belepes';
import Link from 'next/link';
import { useActionState } from 'react';

export default function Belepes() {

  const [formState, formAction] = useActionState(belepes, {errors: null});

  return (
    <>
      <title>Belépés</title>
      <h1>Belépés</h1>

      <div className="buttonCont right">
        <Link className='neonOrange text2 margBott1' href="?mode=regisztracio">Ha még nem regisztráltál, kattints ide!</Link>
      </div>

      <main id='formCont'>
        <form id="userForm" action={formAction}>
  
          <Input label='Email Cím' id='email' type='email' defaultValue={formState.enteredValues?.email}/>
          <Input label='Jelszó' id='pass' type='password' defaultValue={formState.enteredValues?.pass}/>
  
          {formState.errors && 
            formState.errors.map((error) => (<p key={error} className='neonRed margTop1 text0 center'>{error}</p> ))
          }

          <div className='buttonCont center margTop1'>
            <button className='neonGreen hover text0 center'>Belépés</button>
            <button type='reset' className='neonRed hover text0 center'>Törlés</button>
          </div>
        </form>
        
      </main>
    </>
  );
}