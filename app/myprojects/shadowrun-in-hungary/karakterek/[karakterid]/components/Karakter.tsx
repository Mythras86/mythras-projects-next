'use client';

import { useDispatch, useSelector } from "react-redux";
import { KarakterDto } from "../../../store/karakter.dto";
import Jellemzok from "./Jellemzok/Jellemzok";
import { useEffect } from "react";
import { karakterActions } from "../../../store/karakter.slice";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { saveKarakter } from "@/app/api/projects/shadowrunInHungary/karakter.route";
import Eroforrasok from "./Eroforrasok/Eroforrasok";

interface Props {
    karakter: KarakterDto;
}

export default function Karakter({karakter}: Props) {

    
    const newChar: KarakterDto = useSelector((state: any) => state.shadowrunKarakter);
    const dispatch = useDispatch()
    
    const router = useRouter();
    useEffect(() => {
        dispatch(karakterActions.betoltes(karakter))
    }, [])

    function karakterMentes() {
        saveKarakter(newChar);
    }
    

    return (
        <>
        {karakter &&
        <>
            <Jellemzok></Jellemzok>
            <Eroforrasok></Eroforrasok>
            <Button iconType={"no"}
            onClick={()=>router.push('/myprojects/shadowrun-in-hungary/karakterek')}
            >Vissza</Button>
            <Button iconType={"yes"} onClick={karakterMentes}>Karakter Mentése</Button>
            </>
        }
        </>
    );

}