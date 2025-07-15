'use client';

import { useDispatch, useSelector } from "react-redux";
import { KarakterDto } from "../../../store/karakter.dto";
import Jellemzok from "./Jellemzok/Jellemzok";
import Orokseg from "./Orokseg/Orokseg";
import Tulajdonsagok from "./Tulajdonsagok/Tulajdonsagok";
import { useEffect } from "react";
import { karakterActions } from "../../../store/karakter.slice";
import Button from "@/components/Button/Button";
import Link from "next/link";

interface Props {
    karakter: KarakterDto;
}

export default function Karakter({karakter}: Props) {

    const char = useSelector((state: any) => state.shadowrunKarakter);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(karakterActions.betoltes(karakter))
    }, [])

    return (
        <>
        {karakter &&
        <>
            <Orokseg></Orokseg>
            <Jellemzok></Jellemzok>
            <Link href={"/myprojects/shadowrun-in-hungary/karakterek"}>
                <Button iconType={"no"}>Vissza</Button>
            </Link>
            </>
        }
        </>
    );

}