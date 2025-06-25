import { useSelector } from "react-redux";
import { tulajdonsagokData } from "./store/tulajdonsagokData";
import Tulajdonsag from "./components/Tulajdonsag";

export default function Tulajdonsagok() {
      
    const char = useSelector((state: any) => state.shadowrunKarakter);

    return (
        <main>
            <h1 className="margBott1">Tulajdonságok</h1>
            <form id='tulajdonsagok'>
            {tulajdonsagokData.map(tulajdonsag =>
                <Tulajdonsag key={tulajdonsag.key} tulajdonsag={tulajdonsag} tulajdonsagErtek={char[tulajdonsag.key]}></Tulajdonsag>
            )}
            <button type="button" className="neonGreen text2">Mentés</button>
            </form>
        </main>
    );
}