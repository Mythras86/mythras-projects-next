interface IJellemzoSzoveg {
    id: string;
    defaultValue: string;
    setInput: (e: any)=>void
}

export default function JellemzoSzoveg({id, defaultValue, setInput}: IJellemzoSzoveg) {

    return (
    <>
    <input className="neonGrey text0 center" id={id}
    type="text"
    defaultValue={defaultValue}
    onChange={(e: any)=>setInput(e.target.value)}/>
    </>
    );
}