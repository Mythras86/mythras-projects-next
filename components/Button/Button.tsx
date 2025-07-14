import cl from './Button.module.css';

interface Props {
    className?: string;
    iconType: 'yes' | 'no' | 'edit';
    children?: string;
    fnOnClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function ButtonEdit({className, iconType, fnOnClick, children}: Props) {

    function getButtonClass() {
        if(className) {
            return className;
        }
        if(iconType === 'yes') {
            return 'text2 neonGreen center';
        }
        if(iconType === 'no') {
            return 'text2 neonRed center';
        }
        if(iconType === 'edit') {
            return 'text2 neonYellow center';
        }
        return 'text2 neonWhite center'
    }

    return (
        <button 
        type='button' 
        onClick={fnOnClick}
        className={cl[iconType] +' '+getButtonClass()}
        >
        {children? ' '+children: ''}
        </button>
    );
}