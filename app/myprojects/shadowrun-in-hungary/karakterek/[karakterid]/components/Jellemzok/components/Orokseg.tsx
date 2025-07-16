'use client';

import { useSelector } from "react-redux";
import Jellemzo from "../Jellemzo/Jellemzo";
import { oroksegData } from "../store/jellemzok.orokseg.data";
import { OroksegDto } from "../store/jellemzok.orokseg.dto";
import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";
import { getJellemzo } from "../util/getJellemzo";

export default function Orokseg() {

  const char: KarakterDto = useSelector((state: any) => state.shadowrunKarakter);
  
  return (
    <div className="flexCont margBott1">
      <h2>Örökség</h2>
      {Object.keys(oroksegData).map((orokseg: string) =>
          <Jellemzo key={orokseg}
          jellemzo={getJellemzo(
            orokseg,
            oroksegData[orokseg as keyof OroksegDto],
            char[orokseg as keyof OroksegDto]
          )}
          ></Jellemzo>
        )}
    </div>
  );
}
    
    
