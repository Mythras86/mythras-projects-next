import { karakterActions } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.slice";
import { useDispatch } from "react-redux";

interface Props {
    fejlec: string;
    alapertek: string;
    ertek: number
    target: string;
}

export default function Allapot({fejlec, alapertek, ertek, target}: Props) {

    const allapotJelzo: number[] = [1,2,3,4,5,6,7,8,9,10];
    const dispatch = useDispatch()

    function handleChange(toThis: number) {
        dispatch(karakterActions.szerkesztes({
            targetKey: target,
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
        <h2>{fejlec} {ertek}</h2>
        <div className="flexCont">
            <div onClick={()=>handleChange(0)} className={`text0 flex1 ${getColor(0)}`}>{alapertek}</div>
            {allapotJelzo.map(allapot => 
                <div onClick={()=>handleChange(allapot)} key={allapot} className={`text0 flex1 ${getColor(allapot)}`}>{allapot}</div>
            )}
        </div>
        </>
    );
}