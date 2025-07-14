'use client';

import { saveKarakter } from "@/app/api/projects/shadowrunInHungary/karakter.route";
import Button from "@/components/Button/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import Jellemzo, { IJellemzo } from "../../karakterek/components/[id]/components/Jellemzok/Jellemzo/Jellemzo";
import Orokseg from "../../karakterek/components/[id]/components/Orokseg/Orokseg";
import { oroksegData } from "../../karakterek/components/[id]/components/Orokseg/store/orokseg.data";
import { OroksegDto } from "../../karakterek/components/[id]/components/Orokseg/store/orokseg.dto";

export default function Ujkarakter() {

    
    const [step, changeStep] = useState<number>(0);
    
    const lepesek: string[] = Object.keys(oroksegData);
    
    const karakter = useSelector((state: any) => state.shadowrunKarakter);
    const oroksegErtek = useSelector((state: any) => state.shadowrunKarakter[lepesek[step]]);

    function nextStep() {
        if (step > lepesek.length-1) {
            return;
        }
        changeStep(prev => prev+1);
    }

    const jellemzo: IJellemzo = {
        key: lepesek[step],
        adat: oroksegData[lepesek[step] as keyof OroksegDto],
        ertek: oroksegErtek
    }

    function karakterMentes() {
        saveKarakter(karakter);
    }

    return (
        <>
        {step <= lepesek.length-1 &&
        <>
            <Jellemzo key={jellemzo.key} jellemzo={jellemzo} editStatus={true}></Jellemzo>

            {oroksegErtek &&
                <Button fnOnClick={nextStep} iconType={"yes"}>Következő</Button>
            }
        </>
        }
        {step > lepesek.length-1 &&
        <>
            <Orokseg></Orokseg>
            <Button iconType={"yes"} fnOnClick={karakterMentes}>Karakter Mentése</Button>
        </>
        }
        </>
    );
}