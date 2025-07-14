import cl from '../Jellemzo.module.scss';

interface Props {
    id: string;
    className?: string;
    min?: string;
    max?: string;
    ertek?: string;
    setInputValue: (e: any) => void;
}

export default function InputDatum({
    id, setInputValue, 
    className = 'neonGrey text0 center', 
    min = '2020-01-01',
    max = '2120-01-01',
    ertek = '2020-01-01'
}: Props) {
    return (
        <input id={id} className={cl.datumValaszto+' '+className}
        type="date" 
        min={min} 
        max={max} 
        defaultValue={ertek}
        onChange={(e)=>setInputValue(e.target.value)}
        />
    );
}