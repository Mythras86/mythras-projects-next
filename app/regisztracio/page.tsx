"use client"

import { useActionState, useState } from 'react';
import './azonositas.scss';
import Input from '../../components/Input';
import { isNotEmpty, isEmail, hasMinLength } from '../../components/validation';

  function regisztracio(prevFormState: any, formData:any) {
    const name = formData.get('nev');
    const email = formData.get('email');
    const pass = formData.get('pass');
    
    let errors = [];
    
    if (!isNotEmpty(name)) {
      errors.push('Hibás név, adj meg egy nevet!');
    }
    if (!isEmail(email)) {
      errors.push('Hibás email cím!');
    }
    if (!isNotEmpty(pass) || !hasMinLength(pass, 4)) {
      errors.push('Hibás jelszó, legalább 4 karakter hosszúnak kell lennie!');
    }

    if (errors.length > 0) {
      return {errors, enteredValues: {
        name,
        email,
        pass
      }};
    }
    
    return {errors: null};
  }

  
  export default function Regisztracio() {
    const [formState, formAction, formPending] = useActionState(regisztracio, {errors: null});
    
    return (
      <main id='formCont'>
        <h1>Regisztráció</h1>

        <form id="userReg" className='bg-black border-orange' action={formAction}>
          <p className='bg-black border-orange color-orange'>
            Csatlakozz az Árnyakhoz, de sose feledd: ha túl mélyen meredsz a sötétségbe, az visszatekint majd rád és a mélybe húz!
          </p>

          <Input label='Felhasználónév' id='nev' type='text' customClass='bg-black color-orange border-orange' defaultValue={formState.enteredValues?.name}/>
          <Input label='Email Cím' id='email' type='email' customClass='bg-black color-orange border-orange' defaultValue={formState.enteredValues?.email}/>
          <Input label='Jelszó' id='pass' type='password' customClass='bg-black color-orange border-orange' defaultValue={formState.enteredValues?.pass}/>

          <div className='margTop1'>
            <button type='submit' className='bg-black color-orange border-orange'>Regisztráció</button>
            <button type='reset' className='bg-black color-red border-red'>Törlés</button>
          </div>

          {formState.errors && 
            formState.errors.map((error) => (<p key={error} className='bg-red border-white color-white margTop1'>{error}</p> ))
          }
        </form>
      </main>
    );
}