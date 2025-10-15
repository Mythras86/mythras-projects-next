'use client';

import { useSelector } from "react-redux";
import { asztralisData, fizikaiData, specialisData } from "./store/tulajdonsagok.data";
import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";
import TulajdonsagSection from "./components/TulajdonsagSection";

export default function Tulajdonsagok() {
      
    const karakter: KarakterDto = useSelector((state: any) => state.shadowrunKarakter);

    const fizikaiKeys = Object.keys(fizikaiData).map(x=>x);
    const asztralisKeys = Object.keys(asztralisData).map(x=>x);
    const specialisKeys = Object.keys(specialisData).map(x=>x);

    return (
        <main>
            <h1>Tulajdonságok</h1>
            <TulajdonsagSection fejlec={"Fizikum"} dataKeys={fizikaiKeys} data={fizikaiData} karakter={karakter}></TulajdonsagSection>
            <TulajdonsagSection fejlec={"Asztrális"} dataKeys={asztralisKeys} data={asztralisData} karakter={karakter}></TulajdonsagSection>
            <TulajdonsagSection fejlec={"Speciális"} dataKeys={specialisKeys} data={specialisData} karakter={karakter}></TulajdonsagSection>
        </main>
    );
}