'use client';

import { useState } from "react";
import Jellemzok from "../../Jellemzok/Jellemzok";
import Tulajdonsagok from "../../Tulajdonsagok/Tulajdonsagok";
import { saveKarakter } from "@/app/api/projects/shadowrunInHungary/karakter.route";
import { useSelector } from "react-redux";


export default function Orokseg() {
    const [creationStep, changeStep] = useState<number>(0);
    const char = useSelector((state: any) => state.shadowrunKarakter);
    

    function nextStep() {
        changeStep((prev: number) => prev+1);
    }

    function karakterMentese() {
        saveKarakter(char)
    }

    return (
        <main>
            <Jellemzok></Jellemzok>
            <Tulajdonsagok></Tulajdonsagok>
        {/* {creationStep <= jellemzokData.length-1 &&
            <Jellemzo key={jellemzokData[creationStep].key} jellemzo={jellemzokData[creationStep]} nextStep={nextStep}></Jellemzo>
        }
        {creationStep > jellemzokData.length-1 &&
        <>
            <Jellemzok></Jellemzok>

           <button type="button" className="reverseGreen text2" onClick={karakterMentese}>Karakter Mentése</button>
        </>} */}
        </main>
    );
}