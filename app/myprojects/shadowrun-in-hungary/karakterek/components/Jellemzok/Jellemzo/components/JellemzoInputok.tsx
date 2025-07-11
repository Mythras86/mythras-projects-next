import { IJellemzo } from "../Jellemzo";
import InputSzoveg from './InputSzoveg';
import InputSzam from './InputSzam';
import InputDatum from "./InputDatum";
import InputSzin from "./InputSzin";
import InputLista from "./InputLista";
import InputListaEsEgyeb from "./InputListaEsEgyeb";

interface Props {
    jellemzo: IJellemzo;
    inputValue: any;
    setInputValue: (e: any)=>void
}

export const INPTIPUS = {
  text: 'text',
  number: 'number',
  color: 'color',
  date: 'date',
  list: 'list',
  listWithText: 'listWithText',
} as const;


export default function JellemzoIputok({jellemzo, inputValue, setInputValue}: Props) {

    function selected(elem: string | number) {
        if (inputValue === elem) {
            setInputValue(undefined);
        } else {
            setInputValue(elem);
        }
    }

    return (
        <>
        {/* text input */}
        {jellemzo.adat.inputTipus === INPTIPUS.text &&
            <InputSzoveg id={jellemzo.key} ertek={jellemzo.ertek} setInputValue={setInputValue}></InputSzoveg>
        }

        {/* number input */}
        {jellemzo.adat.inputTipus === INPTIPUS.number &&
            <InputSzam id={jellemzo.key} ertek={jellemzo.ertek} setInputValue={setInputValue}></InputSzam>
        }

        {/* dátum input */}
        {jellemzo.adat.inputTipus === INPTIPUS.date &&
            <InputDatum id={jellemzo.key} setInputValue={setInputValue}></InputDatum>
        }

        {/* szín input */}
        {jellemzo.adat.inputTipus === INPTIPUS.color &&
            <InputSzin id={jellemzo.key} setInputValue={setInputValue} selected={selected}></InputSzin>
        }

        {/* lista input */}
        {jellemzo.adat.inputTipus === INPTIPUS.list && jellemzo.adat.lista &&
            <InputLista selected={selected} lista={jellemzo.adat.lista}></InputLista>
        }

        {/* lista input és egyéb lehetőség */}
        {jellemzo.adat.inputTipus === INPTIPUS.listWithText && jellemzo.adat.lista &&
            <InputListaEsEgyeb id={jellemzo.key} setInputValue={setInputValue} selected={selected} lista={jellemzo.adat.lista} ertek={undefined}></InputListaEsEgyeb>
        }
    </>
    );
}