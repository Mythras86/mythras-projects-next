'use client';

import cl from './Modal.module.scss'
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

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
                <button type='button' className={`no reverse text0 ${cl.closeButton}`} onClick={closeModal}></button>
    
                    {children}
                </div>
            </>
            , document?.getElementById('modal') as HTMLElement
        );
    } else {
        return null;
    }

}
