'use client';

import { useSelector } from "react-redux";
import { oroksegData } from "../../store/jellemzok.orokseg.data";
import { OroksegDto } from "../../store/jellemzok.orokseg.dto";
import { dnsData } from "../../store/dns.data";
import { DnsModel } from "../../store/dns.model";
import Ertek from "./Ertek";
import { INPTIPUS } from "../../util/const-INPTIPUS";
import useSelectId from "@/lib/hooks/useSelectMe";

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
    const {selectedId, toggleSelectId, getSelectedClass} = useSelectId();

    let colorInput: Array<string> = [];

    if (!lista && Object.keys(oroksegData).includes(id)) {
        const dns = dnsData.find(x=>x.szoveg === charDns);
        colorInput = dns![id as keyof DnsModel] as string[];
    }

    function selectOne(value: any) {
        selected(value);
        toggleSelectId(value);
    }


    return (
        <>
        <input id={id}
        type="color" 
        className={className} 
        onChange={(e)=>setInputValue(e.target.value)}
        defaultValue={ertek}
        />
        {colorInput.length > 0 &&
        <>
            {colorInput.map(color=>
            <div key={color} onClick={()=>selectOne(color)} className={getSelectedClass(color === selectedId)} >
                <Ertek ertek={color} tipus={INPTIPUS.color}></Ertek>
            </div>
            )}
        </>
        }
        </>
    );
}