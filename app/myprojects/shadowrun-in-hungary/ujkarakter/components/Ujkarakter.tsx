'use client';

import { useSelector } from "react-redux";
import Jellemzo, { IJellemzo } from "../../karakterek/components/Jellemzok/Jellemzo/Jellemzo";
import { oroksegData } from "../../karakterek/components/Orokseg/store/orokseg.data";
import { OroksegDto } from "../../karakterek/components/Orokseg/store/orokseg.dto";
import { useState } from "react";
import Button from "@/components/buttons/Button";

export default function Ujkarakter() {

    
    const [step, changeStep] = useState<number>(0);
    
    const lepesek: string[] = Object.keys(oroksegData);
    
    const orokseg = useSelector((state: any) => state.shadowrunKarakter.orokseg);
    const oroksegErtek = useSelector((state: any) => state.shadowrunKarakter.orokseg[lepesek[step]]);

    function nextStep() {
        if (step >= lepesek.length-1) {
            console.log(orokseg)
            return;
        }
        changeStep(prev=> prev+1);
    }

    const jellemzo: IJellemzo = {
        tipus: "orokseg",
        key: lepesek[step],
        adat: oroksegData[lepesek[step] as keyof OroksegDto],
        ertek: oroksegErtek
    }

    return (
        <>
        <Jellemzo key={jellemzo.key} jellemzo={jellemzo}></Jellemzo>

        {oroksegErtek &&
            <Button fnOnClick={nextStep} iconType={"yes"} className="neonGreen text2 margTop1">Következő</Button>
        }

        </>
    );
}