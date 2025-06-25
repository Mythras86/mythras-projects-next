import React from "react";

interface Props {
    className?: string;
    children: React.ReactNode;
}

export default function PBlock({className='text2 color-white margBott1' , children}: Props) {
    return (
        <p className={`textBlock ${className}`}>
            {children}
        </p>
    );
}