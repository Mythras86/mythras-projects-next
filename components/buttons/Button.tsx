import cl from './Button.module.css';

interface Props {
    className?: string;
    iconType: 'yes' | 'no' | 'edit';
    children?: string;
    fnOnClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function ButtonEdit({className = 'text2 neonWhite', iconType, fnOnClick, children}: Props) {
    return (
        <button 
        type='button' 
        onClick={fnOnClick}
        className={cl[iconType] +' '+className}
        >
        {children? ' '+children: ''}
        </button>
    );
}