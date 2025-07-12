import { useSelector } from "react-redux";
import Jellemzo, { IJellemzo } from "./Jellemzo/Jellemzo";
import { jellemzokData } from "./Jellemzo/store/jellemzok.data";
import { JellemzokDto } from "./Jellemzo/store/jellemzok.dto";
import { JellemzoModel } from "./Jellemzo/store/jellemzo.model";
import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";

export default function Jellemzok() {
  
  const char: KarakterDto = useSelector((state: any) => state.shadowrunKarakter);

  function getJellemzo(key: string, adat: JellemzoModel, ertek: any): IJellemzo {
    return {key, adat, ertek}
  }

  return (
    <main id='jellemzok'>
      <h1 className="margBott1">Jellemzők</h1>
      {Object.keys(jellemzokData).map((jellemzo: string) =>
          <Jellemzo key={jellemzo}
          jellemzo={getJellemzo(
            jellemzo,
            jellemzokData[jellemzo as keyof JellemzokDto],
            char[jellemzo as keyof JellemzokDto]
          )}
          ></Jellemzo>
      )}
      <button type="button" className="neonGreen text2">Mentés</button>
    </main>
  );
}