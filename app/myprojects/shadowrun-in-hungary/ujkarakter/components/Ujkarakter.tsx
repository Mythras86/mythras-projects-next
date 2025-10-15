'use client';

import useKarakter from "@/lib/hooks/useKarakter";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Jellemzo, { IJellemzo } from "../../[karakterid]/components/Jellemzok/Jellemzo/Jellemzo";
import Jellemzok from "../../[karakterid]/components/Jellemzok/Jellemzok";
import { oroksegData } from "../../[karakterid]/components/Jellemzok/store/jellemzok.orokseg.data";
import { OroksegDto } from "../../[karakterid]/components/Jellemzok/store/jellemzok.orokseg.dto";
import ButtonKarakterControl from "../../components/ButtonKarakterControl";

export default function Ujkarakter() {

    const [step, changeStep] = useState<number>(100);
    
    const lepesek: string[] = Object.keys(oroksegData);
    
    const oroksegErtek = useSelector((state: any) => state.shadowrunKarakter[lepesek[step]]);
    
    const {karakter, setErtek, resetKarakter} = useKarakter();
    
    // reset slice before making a new char
    useEffect(() => {
        resetKarakter();
    }, [])

    function nextStep(toThis?: number) {
        if (toThis === undefined) {
            changeStep(prev => prev+1);
        } else {
            changeStep(toThis);
        }
    }

    const jellemzo: IJellemzo = {
        key: lepesek[step],
        adat: oroksegData[lepesek[step] as keyof OroksegDto],
        ertek: oroksegErtek
    }

    function gyerekbolFelnott(data: string): string {
        if (data === 'Fiúcska!') {
            return "Férfi";
        } else if (data === 'Leányka!') {
            return "Nő";
        } else {
            return "Semleges";
        }
    }

    if (step === 101) {
        const felnott = gyerekbolFelnott(karakter.szuletesiNem)
        setErtek("szuletesiNem", felnott);
        setErtek("latszolagosNem", felnott);
        setErtek("lathatoBorszin", karakter.borszin);
        setErtek("lathatoHajszin", karakter.hajszin);
        setErtek("lathatoSzemszin", karakter.szemszin);
        setErtek("lathatoSzorszin", karakter.szorszin);
    }

    return (
        <>
        {step === 100 &&
        <>
            <h1>Az Örökséged</h1>
            <p className="neonGrey text1 w100">
                <span className="indent2 margBott1">
                Sokan azt mondják, csak megszületni volt nehéz. Pedig ha tudnák, még csak most kezd majd a sz@r a nyakadba ömleni, biztosan a nyelvükre haraptak volna. 
                </span>
                <span className="indent2 margBott1">
                A technológia elszabadult, a mágia visszatért, a világ megváltozott. A társadalom kettészakadt, a gazdagok és hatalmasok egyre gazdagabbak és hatalmasabbak lettek, a szegények pedig egyre szegényebbek és kiszolgáltatottabbak. A törvényeket a pénz írja, te pedig ennek a szeméthegynek a legújabb lakója lehetsz! Örülsz, ugye?
                </span>
                <span className="indent2 margBott1">
                Persze a válaszod nem érdekel senkit, ne is fáradj. Amit most kapsz, azzal kell gazdálkodnod és csak remélheted, hogy az örökséged nem egy halom sz@r lesz. Mert akkor bizony nagyon nehéz dolgod lesz...
                </span>
            </p>
            <div className="buttonCont">
                <button type="button" className="yes text2" onClick={()=>nextStep(0)}>Akkor kezdjük is!</button>
            </div>
        </>
        }

        {step <= lepesek.length-1 &&
        <>
            <Jellemzo 
            key={jellemzo.key} 
            jellemzo={jellemzo} 
            editStatus={true}
            fnOnSave={nextStep}
            ></Jellemzo>
            <ButtonKarakterControl></ButtonKarakterControl>
        </>
        }

        {step === lepesek.length &&
        <>
            <h1>Ideje felnőni pupák!</h1>
            <p className="neonGrey text1 w100">
                <span className="indent2 margBott1">
                    Ki hitte volna, hogy túléled idáig? Nem kapsz érte semmit, de azért megveregetheted a saját vállad. Szép volt aranyapám!
                </span>
                <span className="indent2 margBott1">
                    Na de ennyi elég is volt a dícséretből. Ezer éve nem láttalak, legutóbb még szopogattad a pisztoly csövét és olyat alkottál, hogy a legedzettebb mutáns csatornapatkány is csak kamillázott.
                </span>
                <span className="indent2 margBott1">
                    Most viszont itt az ideje, hogy a nagybetűs életben is megálljad a helyed. Mekkorára megnőttél! És mond, mit csinálsz mostanában? Figyu, ha kell egy jól fizető meló, csak szólj és töltsd ki ezt a jelentkezési ívet!
                </span>
            </p>
            <div className="buttonCont">
                <button type="button" className="yes text2" onClick={()=>nextStep(101)}>Induljon az Árnyvadászat!</button>
            </div>
        </>
        }

        {step === 101 &&
        <>
            <Jellemzok></Jellemzok>
            <ButtonKarakterControl></ButtonKarakterControl>
            {!Object.values(karakter).some(x=>x === '') &&
                <ButtonKarakterControl karakter={karakter}></ButtonKarakterControl>
            }
        </>
        }
        </>
    );
}