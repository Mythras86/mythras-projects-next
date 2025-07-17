'use client';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jellemzo, { IJellemzo } from "../../karakterek/[karakterid]/components/Jellemzok/Jellemzo/Jellemzo";
import { oroksegData } from "../../karakterek/[karakterid]/components/Jellemzok/store/jellemzok.orokseg.data";
import { OroksegDto } from "../../karakterek/[karakterid]/components/Jellemzok/store/jellemzok.orokseg.dto";
import { KarakterDto } from "../../store/karakter.dto";
import { karakterActions } from "../../store/karakter.slice";
import Jellemzok from "../../karakterek/[karakterid]/components/Jellemzok/Jellemzok";
import ButtonKarakterControl from "../../components/ButtonKarakterControl";

export default function Ujkarakter() {

    const [step, changeStep] = useState<number>(0);
    
    const lepesek: string[] = Object.keys(oroksegData);
    
    const karakter: KarakterDto = useSelector((state: any) => state.shadowrunKarakter);
    const oroksegErtek = useSelector((state: any) => state.shadowrunKarakter[lepesek[step]]);
    
    const dispatch = useDispatch();
    
    // reset slice before making a new char
    useEffect(() => {
        dispatch(karakterActions.resetKarakter());
    }, [])

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
        let newChar = karakter;

        if (newChar.szuletesiNem === 'Fiúcska!') {
            newChar = { ...newChar, szuletesiNem: "Férfi"};
        } else if (newChar.szuletesiNem === 'Leányka!') {
            newChar = { ...newChar, szuletesiNem: "Nő"};
        } else {
            newChar = { ...newChar, szuletesiNem: "Semleges"};
        }
        return newChar;
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
            <ButtonKarakterControl karakter={karakterMentes()}></ButtonKarakterControl>
        </>
        }
        </>
    );
}