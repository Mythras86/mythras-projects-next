'use client';

import Modal from '@/components/modal/Modal';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '@/lib/store/modal.slice';

export default function Login () {

  const modalIds: Array<string> = useSelector((state: any) => state.modal.modalIds);
  const dispatch = useDispatch();
  const thisModalId: string = 'userLogin';

  function openModal() {
    dispatch(modalActions.openModal(thisModalId));
  }

  return (
    <>
    {modalIds.includes(thisModalId)?
      <Modal modalId={thisModalId}>
        <LoginForm></LoginForm>
      </Modal>
      :
      <button className='neonGreen text2 center margBott1' onClick={openModal} type="button">Click here to Login</button>
    }
    </>
  );
}