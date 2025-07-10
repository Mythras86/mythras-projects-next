'use client';

import Modal from '@/components/modal/Modal';
import { modalActions } from '@/lib/store/modal.slice';
import { useSelector, useDispatch } from 'react-redux';
import RegisterForm from './RegisterForm';

export default function Register() {

  const modalId: string = useSelector((state: any) => state.modal.id);
  const dispatch = useDispatch();
  const thisModalId: string = 'userRegister';

  function openModal() {
    dispatch(modalActions.openModal(thisModalId));
  }

  return (
    <>
    {modalId === thisModalId ?
      <Modal modalId={thisModalId}>
        <RegisterForm></RegisterForm>
      </Modal>
      :
      <button className='neonOrange text2 center margBott1' onClick={openModal} type="button">Click here to Register</button>
    }
    </>
    
  );
}