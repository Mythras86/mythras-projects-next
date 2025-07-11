'use client';

import cl from './Modal.module.scss'
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../buttons/Button';

interface Props {
    closeModal: ()=>void;
    children: React.ReactNode;
}

export default function Modal({ children, closeModal}: Props) {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
        document.body.style.overflow = 'hidden';
        return () => {document.body.style.overflow = 'scroll'};
    }, []);

    if (mounted) {
        return createPortal(
            <>
                <div className={cl.modalOverlay} onClick={closeModal} />
                <div className={cl.modal}>
                <Button iconType={'no'} className={`reverseRed text0 ${cl.closeButton}`} fnOnClick={closeModal}></Button>
    
                    {children}
                </div>
            </>
            , document?.getElementById('modal') as HTMLElement
        );
    } else {
        return null;
    }

}
