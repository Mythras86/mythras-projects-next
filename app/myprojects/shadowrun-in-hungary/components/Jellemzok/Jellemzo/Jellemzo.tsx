'use client';

import cl from './Jellemzo.module.scss';
import React, { useState } from 'react';
import { IJellemzok } from '../../../store/dataJellemzok';
import JellemzoLista from './JellemzoLista';
import { useDispatch } from 'react-redux';
import { karakterActions } from '../../../store/karakter.slice';

interface jellemzoProps {
  jellemzo: IJellemzok;
  jellemzoErtek?: string | number;
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
} as const;

export default function Jellemzo({jellemzo, jellemzoErtek, mode, contClass, nextStep, children}: jellemzoProps) {

  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();

  function saveChanges() {
    dispatch(karakterActions.karakterSzerkesztes({
      target: jellemzo.key,
      ertek: inputValue
    }))

    console.log(jellemzo.key, inputValue)

    if (mode === MODE.create && nextStep) {
      nextStep();
      setInputValue(undefined);
    }
  }

  return (
    <div className={cl.jellemzoCont +' '+ contClass}>
      <h2>{inputValue}</h2>

      {/* fejléc */}
      <label htmlFor={jellemzo.key} className='text2 neonWhite center'>
        {jellemzo.nev}
      </label>

      {/* megjegyzés */}
      {mode !== MODE.display &&
        <div className='neonBlue text1'>
          {jellemzo.megjegyzes}
        </div>
      }

      {/* érték, ha van */}
      {jellemzoErtek && mode === MODE.display &&
        <div className="bg-grey border-black text0">
          {jellemzoErtek} {jellemzo.egyseg}
        </div>
      }

      {/* text vagy number input */}
      {mode !== MODE.display && !jellemzo.lista &&
        <input type={jellemzo.inputTipus} id={jellemzo.key} className='text0 bg-grey border-black' onChange={(e: any)=>setInputValue(e.target.value)} />
      }

      {/* lista input */}
      {mode !== MODE.display && jellemzo.lista &&
        <JellemzoLista lista={jellemzo.lista} setInput={setInputValue} inputTipus={jellemzo.inputTipus}></JellemzoLista>
      }

    {children}

    {mode !== MODE.display && inputValue !== undefined &&
      <button type="button" className='neonGreen text1 center' onClick={saveChanges}>{mode === MODE.edit? 'Mentés' : 'Következő'}</button>
    } 
    {mode !== MODE.display && inputValue === undefined &&
    <>
      {jellemzo.lista && jellemzo.inputTipus === INPTIPUS.list &&
        <p className='neonOrange text1 center'>Válaszd ki a listából a megfelelőt!</p>
      }
      {jellemzo.lista && jellemzo.inputTipus === INPTIPUS.text &&
        <p className='neonOrange text1 center'>Válaszd ki a listából a megfelelőt, vagy írd be az egyéb mezőbe!</p>
      }
      {!jellemzo.lista && jellemzo.inputTipus === INPTIPUS.text &&
        <p className='neonOrange text1 center'>Töltsd ki az üres mezőt!</p>
      }
    </>
    } 
    </div>
  );
}