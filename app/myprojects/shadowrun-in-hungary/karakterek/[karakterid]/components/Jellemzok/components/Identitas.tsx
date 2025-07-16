'use client';

import { useSelector } from "react-redux";
import Jellemzo from "../Jellemzo/Jellemzo";
import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";
import { identitasData } from "../store/jellemzok.identitas.data";
import { IdentitasDto } from "../store/jellemzok.identitas.dto";
import { getJellemzo } from "../util/getJellemzo";

export default function Identitas() {

  const char: KarakterDto = useSelector((state: any) => state.shadowrunKarakter);
  
  return (
    <div className="flexCont margBott1">
      <h2>Identitás</h2>
      {Object.keys(identitasData).map((identitas: string) =>
          <Jellemzo key={identitas}
          jellemzo={getJellemzo(
            identitas,
            identitasData[identitas as keyof IdentitasDto],
            char[identitas as keyof IdentitasDto]
          )}
          ></Jellemzo>
        )}
    </div>
  );
}
    
    
