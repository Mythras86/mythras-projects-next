'use client';

import cl from './Jellemzo.module.scss';
import { IJellemzok, TIPUS } from "../data/jellemzok";
import { useState } from 'react';

interface jellemzoProps {
  jellemzo: IJellemzok;
}

export default function Jellemzo({jellemzo}: jellemzoProps) {

  const [selected, changeSelected] = useState('');
  const [inputValue, setValue] = useState('');

  function selectMe(toThis: any) {
    if (selected == toThis) {
      setValue('')
      changeSelected('');
    } else {
      setValue(toThis)
      changeSelected(toThis);
    }
  }

  return (
    <div className={cl.jellemzoCont}>
      <label htmlFor={jellemzo.key} className='text2 neonWhite center'>
        {jellemzo.nev}
      </label>
      <div className='neonBlue text1'>
        {jellemzo.megjegyzes}
      </div>
      {jellemzo.ertek &&
        <div className="bg-grey border-black text0">
          {jellemzo.ertek}
        </div>
      }

      {/* text input */}
      {jellemzo.tipus == TIPUS.text && !jellemzo.lista &&
        <input type={jellemzo.tipus} id={jellemzo.key} className='text0 bg-grey border-black' />
      }

      {/* választós lista */}
      {jellemzo.lista &&
      <>
        {
          jellemzo.lista.map((elem) =>
            <div key={elem} className={`text0 ${selected == elem ? 'reversePurple' : 'neonPurple hover'}`} onClick={()=>selectMe(elem)}>{elem}</div>
          )
        }

        {/* egyéb lehetőség */}
        <label hidden={jellemzo.tipus !== TIPUS.text || selected !== ''} htmlFor={jellemzo.key} className='neonPurple text0 margTop1'>Egyéb</label>
        <input hidden={jellemzo.tipus !== TIPUS.text || selected !== ''} 
        type="text" id={jellemzo.key} 
        className='bg-grey border-black text0' 
        defaultValue={''}
        onChange={(e)=>setValue(e.target.value)}/>
      </>
      }
      
      {/* dátum input */}
      {jellemzo.tipus == TIPUS.date &&
        <input type={jellemzo.tipus} id={jellemzo.key} defaultValue={"2020-04-01"} className='neonPurple hover text0'/>
      }

    </div>
  );
}