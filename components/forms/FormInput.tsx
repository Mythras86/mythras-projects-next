import React from "react";

interface Props {
    label: string;
    inputClass?: string
    labelClass?: string
    id: string;
    error?: string;
    type: string;
}

export default function FormInput({label, inputClass = 'text0', labelClass = 'neonWhite text1 center', id, error, type, ...props}: Props) {
    return (
        <>
            <label 
            htmlFor={id} 
            className={labelClass}>{label}</label>

            <input 
            name={id}
            id={id}
            type={type}
            placeholder={label}
            className={inputClass}
            {...props}/>
        </>
    )
}