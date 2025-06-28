'use client';

import cl from './Jellemzo.module.scss';
import React, { useState } from 'react';
import JellemzoLista from './components/JellemzoLista';
import { useDispatch, useSelector } from 'react-redux';
import { karakterActions } from '../../../store/karakter.slice';
import JellemzoDatum from './components/JellemzoDatum';
import JellemzoSzoveg from './components/JellemzoSzoveg';
import JellemzoSzam from './components/JellemzoSzam';
import JellemzoListaEsSzoveg from './components/JellemzoListaEsSzoveg';
import JellemzoSzin from './components/JellemzoSzin';
import ButtonEdit from '@/components/ButtonEdit/ButtonEdit';
import { JellemzoModel } from './store/dataJellemzok';

interface Props {
  jellemzo: JellemzoModel;
  jellemzoErtek?: any;
  contClass?: string;
  nextStep?: ()=>void;
  children?: React.ReactNode;
}

export const INPTIPUS = {
  text: 'text',
  number: 'number',
  color: 'color',
  date: 'date',
  list: 'list',
  listWithText: 'listWithText',
} as const;

export default function Jellemzo({jellemzo, jellemzoErtek, contClass, nextStep, children}: Props) {

  const [inputValue, setInputValue] = useState();
  const [editMode, setMode] = useState(false);

  const char = useSelector((state: any) => state.shadowrunKarakter);
  const dispatch = useDispatch();

  function saveChanges() {
    dispatch(karakterActions.karakterSzerkesztes({
      target: jellemzo,
      ertek: inputValue
    }))

    if (nextStep) {
      nextStep();
      setInputValue(undefined)
    }
  }
  
  function resetChanges(id: string) {
    const input: any = (document.getElementById(id) as HTMLInputElement);
    input.value = char[id];
    setInputValue(undefined);
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
      {editMode === false && !nextStep &&
        <ButtonEdit fnOnClick={()=>setMode(true)} className={'text1 '+ cl.edit}></ButtonEdit>
      }

      {/* fejléc */}
      <label htmlFor={jellemzo.szoveg} className='text2 neonWhite center'>
        {jellemzo.szoveg}
      </label>

      {/* megjegyzés előtag*/}
      {editMode === true || nextStep &&
        <div className='neonBlue text1'>
          {jellemzo.megjegyzesElo}
        </div>
      }

      {/* érték, ha van */}
      {jellemzoErtek && editMode === false &&
        <div className="neonGrey text0" style={{backgroundColor: getBgColor(jellemzo.inputTipus, jellemzoErtek)}}>
          {jellemzoErtek} {jellemzo.egyseg}
        </div>
      }

      {/* karakter készítés vagy szerkesztés esetén */}
      {editMode === true || nextStep &&
      <>
        {/* text input */}
        {jellemzo.inputTipus === INPTIPUS.text &&
          <JellemzoSzoveg id={jellemzo.szoveg} defaultValue={jellemzo.ertek} setInput={setInputValue}></JellemzoSzoveg>
        }

        {/* number input */}
        {jellemzo.inputTipus === INPTIPUS.number &&
          <JellemzoSzam id={jellemzo.szoveg} defaultValue={jellemzo.ertek} setInput={setInputValue} egyseg={jellemzo.egyseg}></JellemzoSzam>
        }

        {/* dátum input */}
        {jellemzo.inputTipus === INPTIPUS.date &&
          <JellemzoDatum id={jellemzo.szoveg} setInput={setInputValue}></JellemzoDatum>
        }

        {/* szín input */}
        {jellemzo.inputTipus === INPTIPUS.color &&
          <JellemzoSzin id={jellemzo.szoveg} lista={jellemzo.lista} setInput={setInputValue} select={selectMe} selected={inputValue} defaultValue={jellemzo.ertek}></JellemzoSzin>
        }

        {/* lista input */}
        {jellemzo.inputTipus === INPTIPUS.list && jellemzo.lista &&
          <JellemzoLista lista={jellemzo.lista} select={selectMe} selected={inputValue}></JellemzoLista>
        }

        {/* lista input */}
        {jellemzo.inputTipus === INPTIPUS.listWithText && jellemzo.lista &&
          <JellemzoListaEsSzoveg id={jellemzo.szoveg} lista={jellemzo.lista} select={selectMe} selected={inputValue}
          setInput={setInputValue}></JellemzoListaEsSzoveg>
        }

      </>}

      {/* megjegyzés előtag*/}
      {(editMode === true || nextStep) && jellemzo.megjegyzesUto &&
        <div className='neonBlue text1'>
          {jellemzo.megjegyzesUto}
        </div>
      }


      {children}

      {editMode === true || nextStep &&
        <div className="buttonCont center margTop1">
          {inputValue !== undefined &&
          <>
            <button type="button" className='neonGreen text1 center' onClick={saveChanges}>{!nextStep? 'Mentés' : 'Következő'}</button>
            <button type="button" className='neonRed text1 center' onClick={()=>resetChanges(jellemzo.szoveg)}>Mégse</button>
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
            {(jellemzo.inputTipus === INPTIPUS.number || jellemzo.inputTipus === INPTIPUS.text) &&
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