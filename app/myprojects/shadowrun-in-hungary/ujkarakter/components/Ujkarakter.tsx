'use client';

import { useSelector } from "react-redux";
import Jellemzo, { IJellemzo } from "../../karakterek/components/Jellemzok/Jellemzo/Jellemzo";
import { oroksegData } from "../../karakterek/components/Orokseg/store/orokseg.data";
import { OroksegDto } from "../../karakterek/components/Orokseg/store/orokseg.dto";
import { MouseEvent, useState } from "react";
import Button from "@/components/buttons/Button";
import Orokseg from "../../karakterek/components/Orokseg/Orokseg";
import { saveKarakter } from "@/app/api/projects/shadowrunInHungary/karakter.route";

export default function Ujkarakter() {

    
    const [step, changeStep] = useState<number>(0);
    
    const lepesek: string[] = Object.keys(oroksegData);
    
    const karakter = useSelector((state: any) => state.shadowrunKarakter);
    const oroksegErtek = useSelector((state: any) => state.shadowrunKarakter.orokseg[lepesek[step]]);

    function nextStep() {
        if (step > lepesek.length-1) {
            return;
        }
        changeStep(prev => prev+1);
    }

    const jellemzo: IJellemzo = {
        tipus: "orokseg",
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
                <Button fnOnClick={nextStep} iconType={"yes"} className="neonGreen text2 margTop1">Következő</Button>
            }
        </>
        }
        {step > lepesek.length-1 &&
        <>
            <Orokseg></Orokseg>
            <Button iconType={"yes"} className="neonGreen text2 margTop1" fnOnClick={karakterMentes}>Karakter Mentése</Button>
        </>
        }
        </>
    );
}