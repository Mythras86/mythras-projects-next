'use client';

import cl from './Jellemzo.module.scss';
import React, { useState } from 'react';
import { IJellemzok } from './store/dataJellemzok';
import JellemzoLista from './components/JellemzoLista';
import { useDispatch, useSelector } from 'react-redux';
import { karakterActions } from '../../../store/karakter.slice';
import JellemzoDatum from './components/JellemzoDatum';
import JellemzoSzoveg from './components/JellemzoSzoveg';
import JellemzoSzam from './components/JellemzoSzam';
import JellemzoListaEsSzoveg from './components/JellemzoListaEsSzoveg';
import JellemzoSzin from './components/JellemzoSzin';

interface jellemzoProps {
  jellemzo: IJellemzok;
  jellemzoErtek?: any;
  mode: string;
  contClass?: string;
  nextStep?: ()=>void;
  children?: React.ReactNode;
}

export const MODE = {
  create: 'create',
  display: 'display',
  edit: 'edit'
}

export const INPTIPUS = {
  text: 'text',
  number: 'number',
  color: 'color',
  date: 'date',
  list: 'list',
  listWithText: 'listWithText',
} as const;

export default function Jellemzo({jellemzo, jellemzoErtek, mode, contClass, nextStep, children}: jellemzoProps) {

  const [inputValue, setInputValue] = useState();

  const char = useSelector((state: any) => state.shadowrunKarakter);
  const dispatch = useDispatch();

  function saveChanges() {
    dispatch(karakterActions.karakterSzerkesztes({
      target: jellemzo.key,
      ertek: inputValue
    }))

    if (mode === MODE.create && nextStep) {
      nextStep();
      setInputValue(undefined)
    }
  }
  
  function resetChanges(id: string) {
    setInputValue(undefined)
    const input = (document.getElementById(id) as HTMLInputElement);
    input.value = char[id];
  }

  function selectMe(toThis: any) {
    if (inputValue === toThis) {
      setInputValue(undefined);
    } else {
      setInputValue(toThis);
    }
  }

  function getBgColor(tipus: string, ertek: string) {
    if (tipus === 'color') {
      return ertek;
    }
  }

  return (
    <div className={cl.jellemzoCont +' '+ contClass}>

      {/* fejléc */}
      <label htmlFor={jellemzo.key} className='text2 neonWhite center'>
        {jellemzo.nev}
      </label>

      {/* megjegyzés előtag*/}
      {mode !== MODE.display &&
        <div className='neonBlue text1'>
          {jellemzo.megjegyzesElo}
        </div>
      }

      {/* érték, ha van */}
      {jellemzoErtek && mode === MODE.display &&
        <div className="neonGrey text0" style={{backgroundColor: getBgColor(jellemzo.inputTipus, jellemzoErtek)}}>
          {jellemzoErtek} {jellemzo.egyseg}
        </div>
      }

      {/* karakter készítés vagy szerkesztés esetén */}
      {mode !== MODE.display &&
      <>
        {/* text input */}
        {jellemzo.inputTipus === INPTIPUS.text &&
          <JellemzoSzoveg id={jellemzo.key} defaultValue={char[jellemzo.key]} setInput={setInputValue}></JellemzoSzoveg>
        }

        {/* number input */}
        {jellemzo.inputTipus === INPTIPUS.number &&
          <JellemzoSzam id={jellemzo.key} defaultValue={char[jellemzo.key]} setInput={setInputValue} egyseg={jellemzo.egyseg}></JellemzoSzam>
        }

        {/* dátum input */}
        {jellemzo.inputTipus === INPTIPUS.date &&
          <JellemzoDatum id={jellemzo.key} setInput={setInputValue}></JellemzoDatum>
        }

        {/* szín input */}
        {jellemzo.inputTipus === INPTIPUS.color &&
          <JellemzoSzin lista={jellemzo.lista} setInput={setInputValue} select={selectMe} selected={inputValue}></JellemzoSzin>
        }

        {/* lista input */}
        {jellemzo.inputTipus === INPTIPUS.list && jellemzo.lista &&
          <JellemzoLista lista={jellemzo.lista} select={selectMe} selected={inputValue}></JellemzoLista>
        }

        {/* lista input */}
        {jellemzo.inputTipus === INPTIPUS.listWithText && jellemzo.lista &&
          <JellemzoListaEsSzoveg id={jellemzo.key} lista={jellemzo.lista} select={selectMe} selected={inputValue}
          setInput={setInputValue}></JellemzoListaEsSzoveg>
        }

      </>}

      {/* megjegyzés előtag*/}
      {mode !== MODE.display && jellemzo.megjegyzesUto &&
        <div className='neonBlue text1'>
          {jellemzo.megjegyzesUto}
        </div>
      }


      {children}

      {mode !== MODE.display &&
        <div className="buttonCont center margTop1">
          {inputValue !== undefined &&
          <>
            <button type="button" className='neonGreen text1 center' onClick={saveChanges}>{mode === MODE.edit? 'Mentés' : 'Következő'}</button>
            <button type="button" className='neonRed text1 center' onClick={()=>resetChanges(jellemzo.key)}>Mégse</button>
          </>
          } 
          {inputValue === undefined &&
          <>
            {jellemzo.inputTipus === INPTIPUS.list &&
              <p className='neonOrange text1 center'>Válaszd ki a listából a megfelelőt!</p>
            }
            {jellemzo.inputTipus === INPTIPUS.listWithText &&
              <p className='neonOrange text1 center'>Válaszd ki a listából a megfelelőt, vagy írd be az egyéb mezőbe!</p>
            }
            {jellemzo.inputTipus === INPTIPUS.number || jellemzo.inputTipus === INPTIPUS.text &&
              <p className='neonOrange text1 center'>Töltsd ki az üres mezőt!</p>
            }
            {jellemzo.inputTipus === INPTIPUS.color &&
              <p className='neonOrange text1 center'>Válaszd ki a megfelelő színt!</p>
            }
            {jellemzo.inputTipus === INPTIPUS.date &&
              <p className='neonOrange text1 center'>Add meg a dátumot!</p>
            }
          </>
          } 
          </div>
        }

    </div>
  );
}