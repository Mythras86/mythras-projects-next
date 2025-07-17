import { useSelector } from "react-redux";
import Eroforras from "./Eroforras";

export default function Eroforrasok() {

    const karmaAlap: number = useSelector((state: any) => state.shadowrunKarakter['karmaAlap']);
    const karmaKapott: number = useSelector((state: any) => state.shadowrunKarakter['karmaKapott']);
    const karmaFelhasznalt: number = useSelector((state: any) => state.shadowrunKarakter['karmaFelhasznalt']);
    const tokeAlap: number = useSelector((state: any) => state.shadowrunKarakter['tokeAlap']);
    const tokeKapott: number = useSelector((state: any) => state.shadowrunKarakter['tokeKapott']);
    const tokeFelhasznalt: number = useSelector((state: any) => state.shadowrunKarakter['tokeFelhasznalt']);

    function getOsszesKarma() {
        const osszesKarma = karmaAlap + karmaKapott - karmaFelhasznalt;
        return osszesKarma;
    }

    function getOsszesToke() {
        const osszesToke = tokeAlap + tokeKapott - tokeFelhasznalt;
        return osszesToke;
    }

    return(
        <>
        <h1>Erőforrások</h1>
        <h2 className="neonPurple">Karma</h2>
        <Eroforras alapErtek={karmaAlap} kapottErtek={karmaKapott} felhasznaltErtek={karmaFelhasznalt}></Eroforras>
        <div className="text2 reversePurple w100">{getOsszesKarma()}</div>
        <h2 className="neonOrange">Tőke</h2>
        <Eroforras alapErtek={tokeAlap} kapottErtek={tokeKapott} felhasznaltErtek={tokeFelhasznalt}></Eroforras>
        <div className="text2 reverseOrange w100">{getOsszesKarma()}</div>
        </>
    );
}