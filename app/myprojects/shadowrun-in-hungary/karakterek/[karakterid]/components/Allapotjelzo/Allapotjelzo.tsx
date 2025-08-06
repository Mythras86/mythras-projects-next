import { useSelector } from "react-redux";
import Allapot from "./Allapot";

export default function Allapotjelzo() {

    
    const karakter = useSelector((state:any) => state.shadowrunKarakter);
    const asztralis = useSelector((state:any) => state.shadowrunKarakter.asztralisAllapot);
    const fizikai = useSelector((state:any) => state.shadowrunKarakter.fizikaiAllapot);
    const ehseg = useSelector((state:any) => state.shadowrunKarakter.ehseg);
    const faradtsag = useSelector((state:any) => state.shadowrunKarakter.faradtsag);

    return (
        <main>
            <h1>ÁllapotJelző</h1>

            <Allapot fejlec={"Asztrális állapot"} alapertek={"Gyógyult"} ertek={asztralis} target={'asztralisAllapot'}></Allapot>
            <Allapot fejlec={"Fizikai állapot"} alapertek={"Gyógyult"} ertek={fizikai} target={'fizikaiAllapot'}></Allapot>
            <Allapot fejlec={"Éhség állapot"} alapertek={"Jóllakott"} ertek={ehseg} target={'ehseg'}></Allapot>
            <Allapot fejlec={"Fáradtság állapot"} alapertek={"Kipihent"} ertek={faradtsag} target={'faradtsag'}></Allapot>

            <h2>Általános információk</h2>

            <h2>Páncélérték</h2>
            <h2>Reakció</h2>
            <h2>Kezdeményezés</h2>
            <h2>Akció pontok</h2>
        </main>
    );
}