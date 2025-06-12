'use client';

import Jellemzo from "../../components/jellemzok/jellemzo/Jellemzo";
import { oroksegData } from "../../components/jellemzok/data/orokseg";
import { useState } from "react";

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