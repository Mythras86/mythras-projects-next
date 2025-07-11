import { useSelector } from "react-redux";
import Jellemzo, { IJellemzo } from "./Jellemzo/Jellemzo";
import { jellemzokData } from "./Jellemzo/store/jellemzok.data";
import { JellemzokDto } from "./Jellemzo/store/jellemzok.dto";
import { KarakterDto } from "../../../store/karakter.dto";
import { JellemzoModel } from "./Jellemzo/store/jellemzo.model";

export default function Jellemzok() {
  
  const char: KarakterDto = useSelector((state: any) => state.shadowrunKarakter);

  function getJellemzo(tipus: string, key: string, adat: JellemzoModel, ertek: any): IJellemzo {
    return {tipus, key, adat, ertek}
  }

  return (
    <main id='jellemzok'>
      <h1 className="margBott1">Jellemzők</h1>
      {Object.keys(jellemzokData).map((jellemzo: string) =>
          <Jellemzo key={jellemzo}
          jellemzo={getJellemzo(
            'jellemzok',
            jellemzo,
            jellemzokData[jellemzo as keyof JellemzokDto],
            char['jellemzok'][jellemzo as keyof JellemzokDto]
          )}
          ></Jellemzo>
      )}
      <button type="button" className="neonGreen text2">Mentés</button>
    </main>
  );
}