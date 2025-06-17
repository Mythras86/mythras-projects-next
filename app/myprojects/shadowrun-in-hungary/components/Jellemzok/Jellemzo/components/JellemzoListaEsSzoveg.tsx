interface IJellemzoLista {
    id: string;
    lista: Array<any>;
    selected: string | undefined;
    select: (e: any)=>void
    setInput: (e: any)=>void
}

export default function JellemzoLista({id, lista, selected, select, setInput}: IJellemzoLista) {

    return (
    <>
    {lista.map(elem =>
        <div key={elem} className={selected === elem ? 'neonWhite text0' : 'neonGrey hover text0'} 
        onClick={() => select(elem)}
        hidden={selected !== '' && selected !== undefined && selected !== elem}
        >{elem}</div>
    )}
    {!lista.includes(selected) &&
    <>
        <label className="neonWhite text1 center margTop1" htmlFor={id}>Egyéb lehetőség</label>
        <input className="neonGrey text0 center" type="text" id={id} onChange={(e: any)=>setInput(e.target.value)}/>
    </>
    }
    </>
    );
}