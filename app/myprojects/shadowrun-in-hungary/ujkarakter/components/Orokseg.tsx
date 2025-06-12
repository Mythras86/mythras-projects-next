'use client';

import { useState } from "react";
import { oroksegData } from "../../components/Jellemzok/data/dataOrokseg";
import Jellemzo from "../../components/Jellemzok/Jellemzo/Jellemzo";


export default function Orokseg() {

    const [creationState, changeState] = useState(0);

    function handleKovetkezo() {
        if (creationState >= oroksegData.length-1) {
            return;
        }
        changeState(prev => prev+1);
    }

    return (
        <>
        <Jellemzo key={oroksegData[creationState].key} jellemzo={oroksegData[creationState]}></Jellemzo>
        <button type="button" onClick={handleKovetkezo}>Következő</button>
        </>
    );
}