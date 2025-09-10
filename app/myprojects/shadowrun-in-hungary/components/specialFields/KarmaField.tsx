import cl from './KarmaField.module.scss';

interface Props {
    children: number;
    reverse?: boolean
    className?: string
}

export default function KarmaField({children, reverse = false, className = 'text0 flex1'}: Props) {

    function getColor() {
        if(reverse) {
            return 'reversePurple';
        }
        return 'neonPurple';
    }

    return (
        <span className={cl.field+' '+className+' '+ getColor()}>{children}</span>
    );
}