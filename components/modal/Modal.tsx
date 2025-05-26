'use client';

import { modalActions } from '@/lib/store/modal.slice';
import cl from './Modal.module.scss'

interface IModal {
    modalId: string;
    closeModal?: ()=>void;
    children: React.ReactNode;
}

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

export default function Modal({ modalId, children, closeModal}: IModal) {

    const dispatch = useDispatch();

    function simpleClose() {
        dispatch(modalActions.closeModal(modalId));
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {document.body.style.overflow = 'scroll'};
    }, []);


    return createPortal(
        <>
        <div className={cl.modalOverlay} onClick={closeModal ?? simpleClose} />
        <div className={cl.modal}>
        <button className={`reverseRed ${cl.closeButton}`} type='button' onClick={closeModal}>X</button>

            {children}
        </div>
        </>
        ,
        document.getElementById('modal') as HTMLElement
    );
}
