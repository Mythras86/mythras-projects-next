import React from 'react';
import './Expand.module.scss';

interface Props {
    isVisible: boolean;
    className: string;
    children: React.ReactNode;
}

export default function Expand({isVisible, className, children}: Props) {
    return (
        <>
        {isVisible &&
            <div className={className}>{children}</div>
        }
        </>
    );
}