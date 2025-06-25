import cl from "../Jellemzo.module.scss";

interface Props {
    id: string;
    setInput: (e: any)=>void
}

export default function JellemzoDatum({id, setInput, ...props}: Props) {

    return (
    <>
    <input id={id} {...props} className={`neonGrey text0 center ${cl.datumValaszto}`}
    type="date" 
    min={'2020-01-01'} 
    max={'2120-01-01'} 
    defaultValue={'2020-01-01'}
    onChange={(e: any)=>setInput(e.target.value)}/>
    </>
    );
}