import InputLista from "./InputLista";

interface Props {
    id: string;
    lista: Array<any>;
    ertek: any;
    className?: string;
    selected: (e: any) => void;
    setInputValue: (e: any) => void;
}

export default function InputListaEsEgyeb({id, lista, ertek, selected, setInputValue, className = 'neonWhite text0 center'}: Props) {
    return (
        <>
        <InputLista lista={lista} selected={selected}></InputLista>

        <div className="flexCont margTop1">
            <label className={`margTop1 ${className}`} htmlFor={id}>Egyéb lehetőség</label>
            <input className="neonGrey text0 center" type="text" id={id} 
            onChange={(e)=>setInputValue(e.target.value)}
            defaultValue={ertek}
            />
        </div>
        </>

    );
}