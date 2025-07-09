'use client';

import { useSelector } from "react-redux";
import Jellemzo from "../../karakterek/components/Jellemzok/Jellemzo/Jellemzo";
import { oroksegData } from "../../karakterek/components/Orokseg/store/orokseg.data";
import { OroksegDto } from "../../karakterek/components/Orokseg/store/orokseg.dto";
import { useState } from "react";
import Button from "@/components/buttons/Button";

export default function Ujkarakter() {

    const oroksegErtek = useSelector((state: any) => state.shadowrunKarakter.orokseg);

    const [step, changeStep] = useState<number>(0);

    const lepesek: string[] = Object.keys(oroksegData);

    function nextStep() {
        if (step >= lepesek.length-1) {
            return;
        }
        changeStep(prev=> prev+1);
    }

    return (
        <>
        <Jellemzo 
        jellemzo={oroksegData[lepesek[step] as keyof OroksegDto]} 
        jellemzoErtek={oroksegErtek[lepesek[step] as keyof OroksegDto]}
        ></Jellemzo>

        <Button fnOnClick={nextStep} iconType={"yes"} className="neonGreen text2">Következő</Button>

        </>
    );
}