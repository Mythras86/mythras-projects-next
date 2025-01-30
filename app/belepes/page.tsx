"use client"

import { useActionState } from 'react';
import '../regisztracio/azonositas.scss';
import Input from '../../components/Input';
import { isEmail, isNotEmpty, hasMinLength } from '../../components/validation';

export default function Belepes() {

  function handleBelepes(prevFormState: any, formData:any) {
    const email = formData.get('email');
    const pass = formData.get('pass');

    let errors = [];

    if (!isEmail(email)) {
      errors.push('Hibás email cím!');
    }
    if (!isNotEmpty(pass) || !hasMinLength(pass, 4)) {
      errors.push('Hibás jelszó, legalább 4 karakter hosszúnak kell lennie!');
    }
    
    if (errors.length > 0) {
      return {errors, enteredValues: {
        email,
        pass
      }};
    }
    
    return {errors: null};
  }

  const [formState, formAction, formPending] = useActionState(handleBelepes, {errors: null});

  return (
    <main id='formCont'>
      <title>Belépés</title>
      <h1>Belépés</h1>

      <form id="userLogin" className='bg-black border-green' action={formAction}>

      <p className='bg-black color-green border-green'>
        Tudod a szabályokat: lőj pontosan, spórolj a skulóval és soha, de SOHA ne üzletelj egy Sárkánnyal!
      </p>

        <Input label='Email Cím' id='email' type='email' customClass='color-green border-green' defaultValue={formState.enteredValues?.email}/>
        <Input label='Jelszó' id='pass' type='password' customClass='color-green border-green'  defaultValue={formState.enteredValues?.pass}/>

        <div className='margTop1'>
          <button type='submit' className='bg-black color-green border-green'>Belépés</button>
          <button type='reset' className='bg-black color-red border-red'>Törlés</button>
        </div>

        {formState.errors && 
          formState.errors.map((error) => (<p key={error} className='bg-red border-white color-white margTop1'>{error}</p> ))
        }

      </form>
    </main>
  );
}