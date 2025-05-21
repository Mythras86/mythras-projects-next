import React from "react";

interface IFormInput extends React.PropsWithoutRef<any> {
    label: string;
    inputClass?: string
    labelClass?: string
    id: string;
    error?: string;
    type: string;
}

export default function FormInput({label, inputClass = 'text0', labelClass = 'neonWhite text1 center', id, error, type, ...props}: IFormInput) {
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