import { karakterActions } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.slice";
import { useDispatch, useSelector } from "react-redux";

export default function useManageResources() {

    const karmaAlap: number = useSelector((state: any) => state.shadowrunKarakter['karmaAlap']);
    const karmaKapott: number = useSelector((state: any) => state.shadowrunKarakter['karmaKapott']);
    const karmaFelhasznalt: number = useSelector((state: any) => state.shadowrunKarakter['karmaFelhasznalt']);
    const tokeAlap: number = useSelector((state: any) => state.shadowrunKarakter['tokeAlap']);
    const tokeKapott: number = useSelector((state: any) => state.shadowrunKarakter['tokeKapott']);
    const tokeFelhasznalt: number = useSelector((state: any) => state.shadowrunKarakter['tokeFelhasznalt']);

    const dispatch = useDispatch();

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

    function payByKarma(ertek: number) {
        dispatch(karakterActions.szerkesztes({
            targetKey: "karmaFelhasznalt",
            ertek: karmaFelhasznalt+ertek
        }));
    }
    
    function payByToke(ertek: number) {
        dispatch(karakterActions.szerkesztes({
            targetKey: "tokeFelhasznalt",
            ertek: tokeFelhasznalt+ertek
        }));
    }
    
    return {karmaAlap, karmaKapott, karmaFelhasznalt, osszesKarma, tokeAlap, tokeFelhasznalt, tokeKapott, osszesToke, payByKarma, payByToke};
    
}