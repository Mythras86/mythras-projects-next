'use client'

import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";
import { useSelector } from "react-redux";
import JellemzoSection from "./components/JellemzoSection";
import { oroksegData } from "./store/jellemzok.orokseg.data";
import { identitasData } from "./store/jellemzok.identitas.data";
import { pszicheData } from "./store/jellemzok.psziche.data";

export default function Jellemzok() {

  const karakter: KarakterDto = useSelector((state: any) => state.shadowrunKarakter);
  
  const oroksegKeys = Object.keys(oroksegData).map(x=>x);
  const identitasKeys = Object.keys(identitasData).map(x=>x);
  const pszicheKeys = Object.keys(pszicheData).map(x=>x);

  return (
    <main id='jellemzok'>
      <h1 className="margBott1">Jellemzők</h1>
      <JellemzoSection fejlec={"Örökség"} dataKeys={oroksegKeys} data={oroksegData} karakter={karakter}></JellemzoSection>
      <JellemzoSection fejlec={"Identitás"} dataKeys={identitasKeys} data={identitasData} karakter={karakter}></JellemzoSection>
      <JellemzoSection fejlec={"Psziché"} dataKeys={pszicheKeys} data={pszicheData} karakter={karakter}></JellemzoSection>
    </main>
  );
}