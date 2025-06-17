'use client';

import { useState } from "react";
import Jellemzo, { MODE } from "../../components/Jellemzok/Jellemzo/Jellemzo";
import { useSelector } from "react-redux";
import { jellemzokData } from "../../components/Jellemzok/Jellemzo/store/dataJellemzok";


export default function Orokseg() {

    const char = useSelector((state: any) => state.shadowrunKarakter);

    const [creationStep, changeStep] = useState<number>(0);

    function nextStep() {
        changeStep((prev: number) => prev+1);
    }

    return (
        <>
        {creationStep <= jellemzokData.length-1 &&
            <Jellemzo key={jellemzokData[creationStep].key} jellemzo={jellemzokData[creationStep]} mode={MODE.create} nextStep={nextStep}></Jellemzo>
        }
        {creationStep > jellemzokData.length-1 &&
        <>
            {jellemzokData.map(jellemzo =>
                <Jellemzo key={jellemzo.key} jellemzo={jellemzo} mode={MODE.display} jellemzoErtek={char[jellemzo.key]}></Jellemzo>
            )}
        </>
        }
        </>
    );
}