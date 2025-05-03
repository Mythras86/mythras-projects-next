'use client';

import { useEffect } from "react";
import "./Overlay.scss";

interface IOverlay {
    children: React.ReactNode;
    className?: string;
}

export default function Overlay({className, children}: IOverlay) {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {document.body.style.overflow = 'scroll'};
    }, []);

    return (
        <div className={`overlayCont ${className}`}>
            {children}
        </div>
    );
}