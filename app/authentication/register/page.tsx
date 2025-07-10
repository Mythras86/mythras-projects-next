'use client';

import Modal from '@/components/modal/Modal';
import RegisterForm from './RegisterForm';
import { useState } from 'react';

export default function Register() {

  const [modalOpen, changeModal] = useState<boolean>(false)

  return (
    <>
    {modalOpen ?
      <Modal closeModal={()=>changeModal(false)}>
        <RegisterForm></RegisterForm>
      </Modal>
      :
      <button className='neonOrange text2 center margBott1' onClick={()=>changeModal(true)} type="button">Click here to Register</button>
    }
    </>
    
  );
}