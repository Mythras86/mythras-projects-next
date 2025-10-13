import { useSelector } from "react-redux";
import Allapot from "./Allapot";
import { astralisAllapot, fizikaiAllapot } from "./store/allapotjelzo.data";

export default function Allapotjelzo() {

    const asztralis = useSelector((state:any) => state.shadowrunKarakter.asztralisAllapot);
    const fizikai = useSelector((state:any) => state.shadowrunKarakter.fizikaiAllapot);

    return (
        <main>
            <h1>Állapotjelző</h1>

            <h2 className="neonBlue center">Asztrális Állapot</h2>
            <Allapot allapot={astralisAllapot} ertek={asztralis}></Allapot>
            <h2 className="neonRed center">Fizikai Állapot</h2>
            <Allapot allapot={fizikaiAllapot} ertek={fizikai}></Allapot>

            <h2>Páncélérték</h2>
            <h2>Reakció</h2>
            <h2>Kezdeményezés</h2>
            <h2>Akció pontok</h2>
        </main>
    );
}