'use client';

import { useEffect } from "react";
import "./Overlay.scss";

interface IOverlay {
    children: React.ReactNode;
    className?: string;
    showMe?: boolean
}

export default function Overlay({className, showMe = true, children}: IOverlay) {

    useEffect(() => {
        if (showMe) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'scroll';
        return () => {};
    }, [showMe]);

    return (
        <>
        {showMe &&
            <div className={`overlayCont ${className}`}>
                {children}
            </div>
        }
        </>
    );
}