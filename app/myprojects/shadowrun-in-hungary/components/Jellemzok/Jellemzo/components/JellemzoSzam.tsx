interface Props {
    id: string;
    defaultValue: string;
    min?: number;
    max?: number;
    step?: number;
    egyseg?: string;
    setInput: (e: any)=>void
}

export default function JellemzoSzam({id, defaultValue, min=0, max=400, step=1, egyseg, setInput}: Props) {


    return (
    <>
    <input className="neonGrey text0 center" id={id}
    type="number"
    step={1}
    min={min}
    max={max}
    defaultValue={defaultValue}
    onChange={(e: any)=>setInput(e.target.value)}/>
    </>
    );
}