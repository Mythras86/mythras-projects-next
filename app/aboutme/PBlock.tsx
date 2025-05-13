import React from "react";

interface IPBlock {
    className?: string;
    children: React.ReactNode;
}

export default function PBlock({className='text2 color-white margBott1' , children}: IPBlock) {
    return (
        <p className={`textBlock ${className}`}>
            {children}
        </p>
    );
}