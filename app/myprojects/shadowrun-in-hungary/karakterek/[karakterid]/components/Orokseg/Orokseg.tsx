import { useSelector } from "react-redux";
import Jellemzo, { IJellemzo } from "../Jellemzok/Jellemzo/Jellemzo";
import { JellemzoModel } from "../Jellemzok/Jellemzo/store/jellemzo.model";
import { oroksegData } from "./store/orokseg.data";
import { OroksegDto } from "./store/orokseg.dto";
import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";

export default function Orokseg() {

  const char: KarakterDto = useSelector((state: any) => state.shadowrunKarakter);

  function getOrokseg(key: string, adat: JellemzoModel, ertek: any): IJellemzo {
    return {key, adat, ertek}
  }
  
  return (
    <main id="orokseg">
      <h1 className="margBott1">Örökség</h1>
      {Object.keys(oroksegData).map((orokseg: string) =>
          <Jellemzo key={orokseg}
          jellemzo={getOrokseg(
            orokseg,
            oroksegData[orokseg as keyof OroksegDto],
            char[orokseg as keyof OroksegDto]
          )}
          ></Jellemzo>
      )}
    </main>
  );
}
    
    
