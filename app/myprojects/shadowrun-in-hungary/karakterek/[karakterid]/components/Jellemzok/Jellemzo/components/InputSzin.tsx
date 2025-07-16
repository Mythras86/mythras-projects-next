'use client';

import { useSelector } from "react-redux";
import { oroksegData } from "../../store/jellemzok.orokseg.data";
import InputLista from "./InputLista";
import { OroksegDto } from "../../store/jellemzok.orokseg.dto";
import { dnsData } from "../../store/dns.data";
import { DnsModel } from "../../store/dns.model";
import Ertek from "./Ertek";
import Selectable from "@/components/Selectable/Selectable";
import { INPTIPUS } from "../../util/const-INPTIPUS";

interface Props {
    id: string;
    ertek?: any;
    className?: string;
    lista?: Array<string>;
    setInputValue: (e: any) => void;
    selected: (e: any) => void;
}


export default function InputSzin({id, ertek, lista, className = 'text2 margBott1', setInputValue, selected}: Props) {

    const charDns: keyof OroksegDto = useSelector((state: any)=>state.shadowrunKarakter.dns)
    
    let colorInput: Array<string> = [];

    if (!lista && Object.keys(oroksegData).includes(id)) {
        const dns = dnsData.find(x=>x.szoveg === charDns);
        colorInput = dns![id as keyof DnsModel] as string[];
    }

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
        {colorInput.length > 0 &&
        <>
            {colorInput.map(color=>
            <Selectable key={color} selectId={color} selectAction={()=>selected(color)}>
                <Ertek ertek={color} tipus={INPTIPUS.color}></Ertek>
            </Selectable>
            )}
        </>
        }
        </>
    );
}