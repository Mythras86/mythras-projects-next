import { szakertelmekData } from "../../karakterek/components/Szakertelmek/store/szakertelmek.data";
import Eszkoz from "./Eszkoz";

export default function Eszkozok() {
    return (
        <div className="flexCont">
            {szakertelmekData.map((szakertelem, index) =>
                <Eszkoz key={index} item={szakertelem}></Eszkoz>
            )}
        </div>
    );
}