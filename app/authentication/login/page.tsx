'use client';

import Modal from '@/components/modal/Modal';
import LoginForm from './LoginForm';
import { useState } from 'react';

export default function Login () {

  const [modalOpen, changeModal] = useState<boolean>(false)

  return (
    <>
    {modalOpen ?
      <Modal closeModal={()=>changeModal(false)}>
        <LoginForm></LoginForm>
      </Modal>
      :
      <button className='neonGreen text2 center margBott1' onClick={()=>changeModal(true)} type="button">Click here to Login</button>
    }
    </>
  );
}