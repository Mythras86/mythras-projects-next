interface Props {
    szoveg: string;
    className?: string;
}

export default function Megjegyzes({szoveg, className = 'neonBlue text1'}: Props) {
    return (
        <p className={className}>
          {szoveg}
        </p>
    );
}