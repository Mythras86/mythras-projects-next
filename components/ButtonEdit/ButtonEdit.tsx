import { MouseEventHandler } from 'react';
import cl from './ButtonEdit.module.css';

interface Props {
    szoveg?: string;
    className?: string;
    fnOnClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function ButtonEdit({szoveg, className, fnOnClick}: Props) {
    return (
        <button 
        type='button' 
        className={`neonYellow ${className+' '+cl.editButton}`}
        onClick={fnOnClick}
        >{szoveg}</button>
    );
}