import cl from "../Jellemzo.module.scss";

interface IJellemzoSzin {
    lista?: Array<any>;
    selected: string | undefined;
    select: (e: any)=>void;
    setInput: (e: any)=>void;
}

export default function JellemzoSzin({lista, selected, select, setInput}: IJellemzoSzin) {

    return (
    <>
    <input hidden={lista && lista.includes(selected)} type="color" className="margBott1" onChange={(e) => setInput(e.target.value)}/>
    {lista && lista.map(elem =>
        <div key={elem} className={`text0 ${selected === elem ? cl.selectedBorder : ''}`}
        style={{backgroundColor: elem}} 
        onClick={() => select(elem)}
        hidden={selected !== '' && selected !== undefined && selected !== elem}>{elem}</div>
    )}
    </>
    );
}