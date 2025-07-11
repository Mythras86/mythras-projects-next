import InputLista from "./InputLista";

interface Props {
    id: string;
    ertek?: any;
    className?: string;
    lista?: [];
    setInputValue: (e: any) => void;
    selected: (e: any) => void;
}


export default function InputSzin({id, ertek, lista, className = 'text2 margBott1', setInputValue, selected}: Props) {

    return (
        <>
        <input id={id}
        type="color" 
        className={className} 
        onChange={(e)=>setInputValue(e.target.value)}
        defaultValue={ertek}
        />
        {lista &&
            <InputLista lista={lista} selected={selected}></InputLista>
        }
        </>
    );
}