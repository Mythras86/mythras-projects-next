import { useSelector } from "react-redux";
import Allapot from "./Allapot";
import { astralisAllapot, fizikaiAllapot, pihentsegAllapot, taplaltsagAllapot } from "./allapotjelzo.data";

export default function Allapotjelzo() {

    const asztralis = useSelector((state:any) => state.shadowrunKarakter.asztralisAllapot);
    const fizikai = useSelector((state:any) => state.shadowrunKarakter.fizikaiAllapot);
    const ehseg = useSelector((state:any) => state.shadowrunKarakter.ehseg);
    const faradtsag = useSelector((state:any) => state.shadowrunKarakter.faradtsag);

    return (
        <main>
            <h1>ÁllapotJelző</h1>

            <Allapot allapot={astralisAllapot} ertek={asztralis}></Allapot>
            <Allapot allapot={fizikaiAllapot} ertek={fizikai}></Allapot>
            <Allapot allapot={taplaltsagAllapot} ertek={ehseg}></Allapot>
            <Allapot allapot={pihentsegAllapot} ertek={faradtsag}></Allapot>

            <h2>Általános információk</h2>

            <h2>Páncélérték</h2>
            <h2>Reakció</h2>
            <h2>Kezdeményezés</h2>
            <h2>Akció pontok</h2>
        </main>
    );
}