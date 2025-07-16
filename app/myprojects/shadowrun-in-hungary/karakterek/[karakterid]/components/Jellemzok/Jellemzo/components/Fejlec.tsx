interface Props {
    id: string;
    szoveg: string;
    className?: string;
}

export default function Fejlec({id, szoveg, className = 'text2 neonWhite center'}: Props) {
    return (
        <label htmlFor={id} className={className}>
            {szoveg}
        </label>
    );
}