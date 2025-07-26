import { useSelector } from "react-redux";
import Eroforras from "./Eroforras";
import KarmaField from "../../../../components/specialFields/KarmaField";
import TokeField from "../../../../components/specialFields/TokeField";
import useManageResources from "@/lib/hooks/useManageResources";

export default function Eroforrasok() {
    
    const res = useManageResources();

    return(
        <main>
            <h1>Erőforrások</h1>
            <h2 className="neonPurple">Karma</h2>
            <Eroforras 
            alapErtek={<KarmaField children={res.karmaAlap} />}
            kapottErtek={<KarmaField children={res.karmaKapott} />}
            felhasznaltErtek={<KarmaField children={res.karmaFelhasznalt} />} 
            egyenleg={<KarmaField reverse={true}>{res.osszesKarma}</KarmaField>}
            ></Eroforras>

            <h2 className="neonOrange">Tőke</h2>
            <Eroforras 
            alapErtek={<TokeField>{res.tokeAlap}</TokeField>}
            kapottErtek={<TokeField>{res.tokeKapott}</TokeField>}
            felhasznaltErtek={<TokeField>{res.tokeFelhasznalt}</TokeField>} 
            egyenleg={ <TokeField reverse={true}>{res.osszesToke}</TokeField>} 
            ></Eroforras>
        </main>
    );
}