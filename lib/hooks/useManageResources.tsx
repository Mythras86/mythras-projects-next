import { useSelector } from "react-redux";

export default function useManageResources() {

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

    const osszesKarma = getOsszesKarma();
    
    function getOsszesToke() {
        const osszesToke = tokeAlap + tokeKapott - tokeFelhasznalt;
        return osszesToke;
    }

    const osszesToke = getOsszesToke();
    
    return {karmaAlap, karmaKapott, karmaFelhasznalt, osszesKarma, tokeAlap, tokeFelhasznalt, tokeKapott, osszesToke};
    
}