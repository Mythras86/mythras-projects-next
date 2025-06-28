import { useSelector } from "react-redux";
import Tulajdonsag from "./components/Tulajdonsag";
import { TulajdonsagokData, TulajdonsagokModel } from "./store/tulajdonsagokData";

export default function Tulajdonsagok() {
      
    const char = useSelector((state: any) => state.shadowrunKarakter);

    return (
        <main>
            <h1 className="margBott1">Tulajdonságok</h1>
            <form id='tulajdonsagok'>
            {Object.keys(TulajdonsagokData).map((tulajdonsag: string) =>
                <Tulajdonsag key={tulajdonsag} tulajdonsag={TulajdonsagokData[tulajdonsag as keyof TulajdonsagokModel]} tulajdonsagErtek={char['tulajdonsagok'][tulajdonsag as keyof TulajdonsagokModel]}></Tulajdonsag>
            )}
            <button type="button" className="neonGreen text2">Mentés</button>
            </form>
        </main>
    );
}