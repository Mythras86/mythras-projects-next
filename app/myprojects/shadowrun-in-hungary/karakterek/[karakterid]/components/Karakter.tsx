'use client';

import { useDispatch, useSelector } from "react-redux";
import { KarakterDto } from "../../../store/karakter.dto";
import Jellemzok from "./Jellemzok/Jellemzok";
import { useEffect } from "react";
import { karakterActions } from "../../../store/karakter.slice";
import Eroforrasok from "./Eroforrasok/Eroforrasok";
import ButtonKarakterControl from "../../../components/ButtonKarakterControl";
import Tulajdonsagok from "./Tulajdonsagok/Tulajdonsagok";
import Allapotjelzo from "./Allapotjelzo/Allapotjelzo";

interface Props {
    karakterData?: KarakterDto;
}

export default function Karakter({karakterData}: Props) {
    
    const karakter: KarakterDto = useSelector((state: any) => state.shadowrunKarakter);
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (karakterData) {
            dispatch(karakterActions.betoltes(karakterData));
        }
    }, [])

    return (
        <>
        {karakter &&
        <>
            <Jellemzok></Jellemzok>
            <Tulajdonsagok></Tulajdonsagok>
            <Allapotjelzo></Allapotjelzo>
            <Eroforrasok></Eroforrasok>
            <ButtonKarakterControl karakter={karakter}></ButtonKarakterControl>
            </>
        }
        </>
    );

}