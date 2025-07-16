'use client';

import { useDispatch, useSelector } from "react-redux";
import { KarakterDto } from "../../../store/karakter.dto";
import Jellemzok from "./Jellemzok/Jellemzok";
import Orokseg from "./Jellemzok/components/Orokseg";
import Tulajdonsagok from "./Tulajdonsagok/Tulajdonsagok";
import { useEffect } from "react";
import { karakterActions } from "../../../store/karakter.slice";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
    karakter: KarakterDto;
}

export default function Karakter({karakter}: Props) {

    const router = useRouter();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(karakterActions.betoltes(karakter))
    }, [])

    return (
        <>
        {karakter &&
        <>
            <Jellemzok></Jellemzok>
            <Button iconType={"no"}
            onClick={()=>router.push('/myprojects/shadowrun-in-hungary/karakterek')}
            >Vissza</Button>
            </>
        }
        </>
    );

}