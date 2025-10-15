import { IJellemzo } from "../Jellemzo";
import InputSzoveg from './InputSzoveg';
import InputSzam from './InputSzam';
import InputDatum from "./InputDatum";
import InputSzin from "./InputSzin";
import InputLista from "./InputLista";
import InputListaEsEgyeb from "./InputListaEsEgyeb";
import { INPTIPUS } from "../../util/const-INPTIPUS";
import Megjegyzes from "./Megjegyzes";
import useKarakter from "@/lib/hooks/useKarakter";
import { dnsData } from "../../store/dns.data";

interface Props {
    jellemzo: IJellemzo;
    inputValue: any;
    setInputValue: (e: any)=>void
}

export default function JellemzoIputok({jellemzo, inputValue, setInputValue}: Props) {

    const {getErtek} = useKarakter();

    function selected(elem: string | number) {
        if (inputValue === elem) {
            setInputValue(undefined);
        } else {
            setInputValue(elem);
        }
    }

    function getSzoveg(key: string) {
        const dnsTipus = getErtek('dns');
        const szuletesiNem = getErtek('szuletesiNem');
        const dns = dnsData.find(x=>x.szoveg === dnsTipus);

        let szoveg = '';

        if (key === 'testsuly') {
            if (szuletesiNem === 'Férfi') {
                szoveg = dns?.nemek.ferfi.atlagSuly!;
            } else if (szuletesiNem === 'Nő') {
                szoveg = dns?.nemek.no.atlagSuly!;
            } else {
                szoveg = dns?.nemek.semleges.atlagSuly!;
            }
        }

        if (key === 'magassag') {
            if (szuletesiNem === 'Férfi') {
                szoveg = dns?.nemek.ferfi.atlagMagassag!;
            } else if (szuletesiNem === 'Nő') {
                szoveg = dns?.nemek.no.atlagMagassag!;
            } else {
                szoveg = dns?.nemek.semleges.atlagMagassag!;
            }
        }

        return szoveg;
    }

    return (
        <>
        {/* text input */}
        {jellemzo.adat.inputTipus === INPTIPUS.text &&
            <InputSzoveg id={jellemzo.key} ertek={jellemzo.ertek} setInputValue={setInputValue}></InputSzoveg>
        }

        {/* number input */}
        {jellemzo.adat.inputTipus === INPTIPUS.number &&
        <>
            <InputSzam id={jellemzo.key} ertek={jellemzo.ertek} setInputValue={setInputValue}></InputSzam>
            <Megjegyzes szoveg={getSzoveg(jellemzo.key)}></Megjegyzes>
        </>
        }

        {/* dátum input */}
        {jellemzo.adat.inputTipus === INPTIPUS.date &&
            <InputDatum id={jellemzo.key} setInputValue={setInputValue}></InputDatum>
        }

        {/* szín input */}
        {jellemzo.adat.inputTipus === INPTIPUS.color &&
            <InputSzin id={jellemzo.key} setInputValue={setInputValue} selected={selected} inputValue={inputValue}></InputSzin>
        }

        {/* lista input */}
        {jellemzo.adat.inputTipus === INPTIPUS.list && jellemzo.adat.lista &&
            <InputLista selected={selected} lista={jellemzo.adat.lista}></InputLista>
        }

        {/* lista input és egyéb lehetőség */}
        {jellemzo.adat.inputTipus === INPTIPUS.listWithText && jellemzo.adat.lista &&
            <InputListaEsEgyeb id={jellemzo.key} setInputValue={setInputValue} selected={selected} lista={jellemzo.adat.lista} ertek={undefined} inputValue={inputValue}></InputListaEsEgyeb>
        }
    </>
    );
}