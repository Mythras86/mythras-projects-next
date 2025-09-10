import cl from './Button.module.css';

interface Props {
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    iconType: 'yes' | 'no' | 'edit';
    children?: any;
    extra?: any;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({className, type = 'button', iconType, onClick, children, extra}: Props) {

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
        type={type}
        onClick={onClick}
        className={cl[iconType] +' '+getButtonClass()}
        >
        {children? ' '+children: ''}
        {extra}
        </button>
    );
}