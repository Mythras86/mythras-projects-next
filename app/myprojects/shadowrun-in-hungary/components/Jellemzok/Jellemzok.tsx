import { useSelector } from "react-redux";
import Jellemzo from "./Jellemzo/Jellemzo";
import { jellemzokData, JellemzokDto } from "./Jellemzo/store/dataJellemzok";
import { KarakterDto } from "../../store/karakter.dto";

export default function Jellemzok() {
  
  const char: KarakterDto = useSelector((state: any) => state.shadowrunKarakter);

  return (
    <main>
      <form id='jellemzok'>
        <h1 className="margBott1">Jellemzők</h1>
        {Object.keys(jellemzokData).map((jellemzo: string) =>
            <Jellemzo key={jellemzo} jellemzo={jellemzokData[jellemzo as keyof JellemzokDto]} jellemzoErtek={char['jellemzok'][jellemzo as keyof JellemzokDto]}></Jellemzo>
        )}
        <button type="button" className="neonGreen text2">Mentés</button>
      </form>
    </main>
  );
}