interface Props {
    id: string;
    ertek: any;
    className?: string;
    setInputValue: (e: any) => void;
}

export default function InputSzoveg({id, ertek, setInputValue, className = 'neonGrey text0 center'}: Props) {
    return (
        <input className={className} id={id}
        type="text"
        defaultValue={ertek}
        placeholder="Töltsd ki az üres mezőt!"
        onChange={(e)=>setInputValue(e.target.value)}
        />
    );
}