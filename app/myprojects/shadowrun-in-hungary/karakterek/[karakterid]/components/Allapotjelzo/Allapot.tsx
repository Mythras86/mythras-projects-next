import { karakterActions } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.slice";
import { useDispatch } from "react-redux";
import { AllapotModel } from "./allapotjelzo.data";

interface Props {
    allapot: AllapotModel;
    ertek: number
}

export default function Allapot({allapot, ertek}: Props) {

    const allapotJelzo: number[] = [1,2,3,4,5,6,7,8,9,10];
    const dispatch = useDispatch()
    
    const allapotModosito = [1, 0, 0, 0, 0, -1, -1, -1, -2, -2, -3];

    function handleChange(toThis: number) {
        dispatch(karakterActions.szerkesztes({
            targetKey: allapot.target,
            ertek: toThis
        }));
    }

    function getColor(allapot: number) {
        if (allapot > ertek) {
            return 'neonGreen'
        }
        if (allapot === ertek) {
            return 'neonYellow'
        }
        if (allapot < ertek) {
            return 'neonRed'
        }
        return 'neonWhite'
    }

    return (
        <>
        <div className="neonBlue text1 w100">{allapot.fejlec}</div>
        <div className="flexCont margBott1">
            <div onClick={() => handleChange(0)} className={`text0 flex0 ${getColor(0)}`}>{allapot.alapertek} +{allapotModosito[ertek]}</div>
            {allapotJelzo.map(ertek =>
                <div onClick={() => handleChange(ertek)} key={ertek} className={`text0 flex1 center ${getColor(ertek)}`}>{allapotModosito[ertek]}</div>
            )}
        </div>
        </>
    );
}