'use client';

import { useDispatch, useSelector } from "react-redux";
import { KarakterDto } from "../../../store/karakter.dto";
import Jellemzok from "./Jellemzok/Jellemzok";
import { useEffect } from "react";
import { karakterActions } from "../../../store/karakter.slice";
import Eroforrasok from "./Eroforrasok/Eroforrasok";
import ButtonKarakterControl from "../../../components/ButtonKarakterControl";
import Tulajdonsagok from "./Tulajdonsagok/Tulajdonsagok";

interface Props {
    karakter: KarakterDto;
}

export default function Karakter({karakter}: Props) {
    
    const newChar: KarakterDto = useSelector((state: any) => state.shadowrunKarakter);
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(karakterActions.betoltes(karakter))
    }, [])

    return (
        <>
        {karakter &&
        <>
            <Jellemzok></Jellemzok>
            <Eroforrasok></Eroforrasok>
            <Tulajdonsagok></Tulajdonsagok>
            <ButtonKarakterControl karakter={newChar}></ButtonKarakterControl>
            </>
        }
        </>
    );

}