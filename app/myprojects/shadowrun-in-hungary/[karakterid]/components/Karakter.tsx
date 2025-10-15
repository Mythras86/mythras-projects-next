'use client';

import { useDispatch, useSelector } from "react-redux";
import Tulajdonsagok from "./Tulajdonsagok/Tulajdonsagok";
import Allapotjelzo from "./Allapotjelzo/Allapotjelzo";
import { useEffect } from "react";
import ButtonKarakterControl from "../../components/ButtonKarakterControl";
import { KarakterDto } from "../../store/karakter.dto";
import { karakterActions } from "../../store/karakter.slice";
import Eroforrasok from "./Eroforrasok/Eroforrasok";
import Jellemzok from "./Jellemzok/Jellemzok";

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
            <Eroforrasok></Eroforrasok>
            <Tulajdonsagok></Tulajdonsagok>
            <Allapotjelzo></Allapotjelzo>
            <ButtonKarakterControl karakter={karakter}></ButtonKarakterControl>
            </>
        }
        </>
    );

}