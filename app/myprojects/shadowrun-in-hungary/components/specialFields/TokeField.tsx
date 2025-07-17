import cl from './TokeField.module.scss';

interface Props {
    children: number;
    reverse?: boolean
    className?: string
}

export default function TokeField({children, reverse = false, className = 'text0 flex1'}: Props) {

    function getColor() {
        if(reverse) {
            return 'reverseOrange';
        }
        return 'neonOrange';
    }

    return (
        <div className={cl.field+' '+className+' '+ getColor()}>{children}</div>
    );
}