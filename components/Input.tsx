import React from "react";

interface IInput extends React.PropsWithoutRef<any> {
    label: string;
    customClass?: string
    id: string;
    error?: string;
    type: string;
}

export default function Input({label, customClass, id, error, type, ...props}: IInput) {
    return (
        <>
            <label 
            htmlFor={id} 
            className={customClass ?? 'bg-black border-white color-white'}>{label}</label>

            <input 
            name={id}
            id={id}
            type={type}
            placeholder={label}
            {...props}/>
        </>
    )
}