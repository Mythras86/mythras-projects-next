import cl from "../Jellemzo.module.scss";

interface Props {
    id: string;
    lista?: Array<any>;
    selected: string | undefined;
    defaultValue: string | number;
    select: (e: any)=>void;
    setInput: (e: any)=>void;
}

export default function JellemzoSzin({id, lista, selected, select, setInput, defaultValue}: Props) {

    return (
    <>
    <input hidden={lista && lista.includes(selected)} 
    id={id}
    type="color" 
    className="margBott1" 
    onChange={(e) => setInput(e.target.value)}
    />
    
    {lista && lista.map(elem =>
        <div key={elem} className={`text0 ${selected === elem ? cl.selectedBorder : ''}`}
        style={{backgroundColor: elem}} 
        onClick={() => select(elem)}
        hidden={selected !== '' && selected !== undefined && selected !== elem}
        defaultValue={defaultValue}
        >{elem}</div>
    )}
    </>
    );
}