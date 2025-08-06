'use client';

import { useSelector } from "react-redux";
import { oroksegData } from "../../store/jellemzok.orokseg.data";
import { OroksegDto } from "../../store/jellemzok.orokseg.dto";
import { dnsData } from "../../store/dns.data";
import { DnsModel } from "../../store/dns.model";
import Ertek from "./Ertek";
import { INPTIPUS } from "../../util/const-INPTIPUS";
import useSelectId from "@/lib/hooks/useSelectMe";
import useKarakter from "@/lib/hooks/useKarakter";

interface Props {
    id: string;
    className?: string;
    lista?: Array<string>;
    inputValue: any;
    setInputValue: (e: any) => void;
    selected: (e: any) => void;
}


export default function InputSzin({id, lista, inputValue, className = 'text2 margBott1', setInputValue, selected}: Props) {

    const {getErtek} = useKarakter();

    const charDns: keyof OroksegDto = useSelector((state: any)=>state.shadowrunKarakter.dns)
    const {selectedId, toggleSelectId, getSelectedClass} = useSelectId();
    
    let colorInput: Array<string> = [];
    
    if (!lista && Object.keys(oroksegData).includes(id)) {
        const dns = dnsData.find(x=>x.szoveg === charDns);
        
        if (dns) {
            colorInput = dns[id as keyof DnsModel] as string[];
        }
    }

    function selectOne(value: any) {
        selected(value);
        toggleSelectId(value);
    }

    return (
        <>
        {!colorInput.includes(inputValue) &&
        <input id={id}
        type="color" 
        className={className} 
        onChange={(e)=>setInputValue(e.target.value)}
        defaultValue={getErtek(id)}
        />
        }
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