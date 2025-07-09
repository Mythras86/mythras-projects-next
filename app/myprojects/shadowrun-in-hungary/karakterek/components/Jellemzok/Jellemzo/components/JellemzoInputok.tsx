'use client';

import cl from '../Jellemzo.module.scss'
import { IJellemzo } from "../Jellemzo";
import SelectableComp from "@/components/selectable/Selectable";
import { karakterActions } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.slice";
import { useSelector, useDispatch } from "react-redux";

interface Props {
    jellemzo: IJellemzo;
}

export const INPTIPUS = {
  text: 'text',
  number: 'number',
  color: 'color',
  date: 'date',
  list: 'list',
  listWithText: 'listWithText',
} as const;


export default function JellemzoIputok({jellemzo}: Props) {

    const karakterJellemzo = useSelector((state:any)=>state.shadowrunKarakter[jellemzo.tipus][jellemzo.key])

    const dispatch = useDispatch();

    function selected(elem: string) {
        if (karakterJellemzo === elem) {
            dispatch(karakterActions.karakterSzerkesztes({
                target: jellemzo.tipus,
                targetKey: jellemzo.key,
                ertek: undefined
            }))
        } else {
            dispatch(karakterActions.karakterSzerkesztes({
                target: jellemzo.tipus,
                targetKey: jellemzo.key,
                ertek: elem
            }))
        }
    }

    return (
        <>
        {/* text input */}
        {jellemzo.adat.inputTipus === INPTIPUS.text &&
            <input className="neonGrey text0 center" id={jellemzo.key}
            type="text"
            defaultValue={jellemzo.ertek}
            placeholder="Töltsd ki az üres mezőt!"
            />
        }

        {/* number input */}
        {jellemzo.adat.inputTipus === INPTIPUS.number &&
            <input className="neonGrey text0 center" id={jellemzo.key}
            type="number"
            defaultValue={jellemzo.ertek}
            placeholder="Töltsd ki az üres mezőt!"
            />
        }

        {/* dátum input */}
        {jellemzo.adat.inputTipus === INPTIPUS.date &&
            <input id={jellemzo.key} className={`neonGrey text0 center ${cl.datumValaszto}`}
            type="date" 
            min={'2020-01-01'} 
            max={'2120-01-01'} 
            defaultValue={'2020-01-01'}
            />
        }

        {/* szín input */}
        {jellemzo.adat.inputTipus === INPTIPUS.color &&
            <>
            <input id={jellemzo.key}
            type="color" 
            className="margBott1" 
            />
            
            {jellemzo.adat.lista && jellemzo.adat.lista.map(elem =>
                <div key={elem} className={'text0'}
                style={{backgroundColor: elem}} 
                onClick={() => selected(elem)}
                defaultValue={jellemzo.ertek}
                >{elem}</div>
            )}
            </>
        }

        {/* lista input */}
        {jellemzo.adat.inputTipus === INPTIPUS.list && jellemzo.adat.lista &&
            jellemzo.adat.lista!.map(elem =>
                <SelectableComp selectAction={()=>selected(elem)} key={elem} className={'neonWhite text0'} selectId={elem}>{elem}</SelectableComp>
            )
            
        }

        {/* lista input */}
        {jellemzo.adat.inputTipus === INPTIPUS.listWithText && jellemzo.adat.lista &&
            <>
            {jellemzo.adat.lista!.map(elem =>
                <SelectableComp selectAction={()=>selected(elem)} key={elem} className={'neonWhite text0'} selectId={elem}>{elem}</SelectableComp>
            )}
            <label className="neonWhite text1 center margTop1" htmlFor={jellemzo.key}>Egyéb lehetőség</label>
            <input className="neonGrey text0 center" type="text" id={jellemzo.key}/>
            </>
        }
    </>
    );
}