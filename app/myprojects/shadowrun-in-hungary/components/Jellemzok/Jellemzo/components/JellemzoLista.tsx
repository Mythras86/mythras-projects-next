interface Props {
    lista: Array<any>;
    selected: string | undefined;
    select: (e: any)=>void
}

export default function JellemzoLista({lista, selected, select}: Props) {

    return (
    <>
    {lista.map(elem =>
        <div key={elem} hidden={selected !== undefined && selected !== elem} className={selected === elem ? 'neonWhite text0' : 'neonGrey hover text0'} onClick={() => select(elem)}>{elem}</div>
    )}
    </>
    );
}