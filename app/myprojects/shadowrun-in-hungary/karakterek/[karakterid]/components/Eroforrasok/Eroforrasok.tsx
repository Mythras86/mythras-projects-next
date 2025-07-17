import { useSelector } from "react-redux";
import Eroforras from "./Eroforras";
import KarmaField from "../../../../components/specialFields/KarmaField";
import TokeField from "../../../../components/specialFields/TokeField";

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
        <main>
            <h1>Erőforrások</h1>
            <h2 className="neonPurple">Karma</h2>
            <Eroforras 
            alapErtek={<KarmaField children={karmaAlap} />}
            kapottErtek={<KarmaField children={karmaKapott} />}
            felhasznaltErtek={<KarmaField children={karmaFelhasznalt} />} 
            egyenleg={<KarmaField reverse={true}>{getOsszesKarma()}</KarmaField>}
            ></Eroforras>

            <h2 className="neonOrange">Tőke</h2>
            <Eroforras 
            alapErtek={<TokeField>{tokeAlap}</TokeField>}
            kapottErtek={<TokeField>{tokeKapott}</TokeField>}
            felhasznaltErtek={<TokeField>{tokeFelhasznalt}</TokeField>} 
            egyenleg={ <TokeField reverse={true}>{getOsszesToke()}</TokeField>} 
            ></Eroforras>
        </main>
    );
}