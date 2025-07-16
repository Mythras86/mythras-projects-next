'use client';

import { useSelector } from "react-redux";
import Jellemzo from "../Jellemzo/Jellemzo";
import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";
import { pszicheData } from "../store/jellemzok.psziche.data";
import { PszicheDto } from "../store/jellemzok.psziche.dto";
import { getJellemzo } from "../util/getJellemzo";

export default function Psziche() {

  const char: KarakterDto = useSelector((state: any) => state.shadowrunKarakter);
  
  return (
    <div className="flexCont margBott1">
      <h2>Psziché</h2>
      {Object.keys(pszicheData).map((psziche: string) =>
          <Jellemzo key={psziche}
          jellemzo={getJellemzo(
            psziche,
            pszicheData[psziche as keyof PszicheDto],
            char[psziche as keyof PszicheDto]
          )}
          ></Jellemzo>
        )}
    </div>
  );
}
    
    
