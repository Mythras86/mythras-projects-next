import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";
import { karakterActions } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.slice";
import { useDispatch, useSelector } from "react-redux"

export default function useKarakter() {
    const karakter = useSelector((state: any)=>state.shadowrunKarakter);
    const dispatch = useDispatch()
    
    function getErtek(key: string) {
        const ertek = karakter[key];
        return ertek;
    }

    function setErtek(key: string, ertek: any) {
        dispatch(karakterActions.szerkesztes({
            targetKey: key,
            ertek: ertek
        }));
    }

    function updateKarakter() {

    }

    function resetKarakter() {
        dispatch(karakterActions.resetKarakter());
    }

    function loadKarakter(karakter: KarakterDto) {
        dispatch(karakterActions.betoltes(karakter));
    }

    return {karakter, getErtek, setErtek, resetKarakter, loadKarakter};
}