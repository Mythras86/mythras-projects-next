'use client';

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Jellemzo, { IJellemzo } from "../../karakterek/[karakterid]/components/Jellemzok/Jellemzo/Jellemzo";
import { oroksegData } from "../../karakterek/[karakterid]/components/Jellemzok/store/jellemzok.orokseg.data";
import { OroksegDto } from "../../karakterek/[karakterid]/components/Jellemzok/store/jellemzok.orokseg.dto";
import Jellemzok from "../../karakterek/[karakterid]/components/Jellemzok/Jellemzok";
import ButtonKarakterControl from "../../components/ButtonKarakterControl";
import useKarakter from "@/lib/hooks/useKarakter";

export default function Ujkarakter() {

    const [step, changeStep] = useState<number>(0);
    
    const lepesek: string[] = Object.keys(oroksegData);
    
    const oroksegErtek = useSelector((state: any) => state.shadowrunKarakter[lepesek[step]]);
    
    const {karakter, setErtek, resetKarakter} = useKarakter();
    
    // reset slice before making a new char
    useEffect(() => {
        resetKarakter();
    }, [])

    function nextStep() {
        changeStep(prev => prev+1);
    }

    const jellemzo: IJellemzo = {
        key: lepesek[step],
        adat: oroksegData[lepesek[step] as keyof OroksegDto],
        ertek: oroksegErtek
    }

    function gyerekbolFelnott(data: string): string {
        if (data === 'Fiúcska!') {
            return "Férfi";
        } else if (data === 'Leányka!') {
            return "Nő";
        } else {
            return "Semleges";
        }
    }

    if (step > lepesek.length-1) {
        const felnott = gyerekbolFelnott(karakter.szuletesiNem)
        setErtek("szuletesiNem", felnott);
        setErtek("latszolagosNem", felnott);
        setErtek("lathatoBorszin", karakter.borszin);
        setErtek("lathatoHajszin", karakter.hajszin);
        setErtek("lathatoSzemszin", karakter.szemszin);
        setErtek("lathatoSzorszin", karakter.szorszin);
    }

    return (
        <>
        {step <= lepesek.length-1 &&
        <>
            <Jellemzo 
            key={jellemzo.key} 
            jellemzo={jellemzo} 
            editStatus={true}
            fnOnSave={nextStep}
            ></Jellemzo>
            <ButtonKarakterControl></ButtonKarakterControl>
        </>
        }
        {step > lepesek.length-1 &&
        <>
            <Jellemzok></Jellemzok>
            {!Object.values(karakter).some(x=>x === '') &&
                <ButtonKarakterControl karakter={karakter}></ButtonKarakterControl>
            }
        </>
        }
        </>
    );
}