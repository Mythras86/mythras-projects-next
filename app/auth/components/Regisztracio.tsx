'use client'

import Input from '@/components/Input';
import { useActionState } from 'react';
import { regisztracio } from '../actions/regisztracio';
import Link from 'next/link';

export default function Regisztracio() {

  const [formState, formAction] = useActionState(regisztracio, {errors: null})

  return (
    <>
      <title>Regisztráció</title>
      <h1>Regisztráció</h1>

      <div className="buttonCont right">
        <Link className='neonOrange text2 center margBott1' href="?mode=belepes">Ha már regisztráltál, lépj be!</Link>
      </div>

    
      <main id='formCont'>
        <form id="userForm" action={formAction}>
  
          <Input label='Felhasználónév' id='name' type='text' defaultValue={formState.enteredValues?.name}/>
          <Input label='Email Cím' id='email' type='email' defaultValue={formState.enteredValues?.email}/>
          <Input label='Jelszó' id='pass' type='password' defaultValue={formState.enteredValues?.pass}/>
  
          {formState.errors && 
            formState.errors.map((error) => (<p key={error} className='neonRed margTop1 text0 center'>{error}</p> ))
          }
          <div className='buttonCont center margTop1'>
            <button className='neonGreen hover text0 center'>Regisztráció</button>
            <button type='reset' className='neonRed hover text0 center'>Törlés</button>
          </div>
        </form>
        
      </main>
    </>
  );
}