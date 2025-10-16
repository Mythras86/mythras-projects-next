import { szakertelmekData } from "../../[karakterid]/components/Szakertelmek/store/szakertelmek.data";
import Eszkoz from "./Eszkoz";

export default function Eszkozok() {
    return (
        <div className="flexRow">
            {szakertelmekData.map((szakertelem, index) =>
                <Eszkoz key={index} item={szakertelem}></Eszkoz>
            )}
        </div>
    );
}