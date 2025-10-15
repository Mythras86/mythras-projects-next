interface Props {
    szoveg: string;
    className?: string;
}

export default function Fejlec({szoveg, className = 'text2 neonWhite center'}: Props) {
    return (
        <div className={className}>
            {szoveg}
        </div>
    );
}