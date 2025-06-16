import { INPTIPUS } from "./Jellemzo";

interface IJellemzoLista {
    lista: Array<any>;
    inputTipus: string;
    setInput: (e: any)=>void
}

export default function JellemzoLista({lista, inputTipus, setInput}: IJellemzoLista) {

    return (
    <>
    {inputTipus !== INPTIPUS.color && lista.map(elem =>
        <div key={elem} className="neonPurple hover text0" onClick={() => setInput(elem)}>{elem}</div>
    )}
    {inputTipus === INPTIPUS.color && lista.map(elem =>
        <div key={elem} className="text0" style={{backgroundColor: '#'+elem}} onClick={() => setInput(elem)}>{elem}</div>
    )}
    </>
    );
}