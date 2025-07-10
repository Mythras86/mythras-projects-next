'use client';

import cl from './Jellemzo.module.scss';
import React, { useRef, useState } from 'react';
import { JellemzoModel } from './store/jellemzo.model';
import Button from '@/components/buttons/Button';
import JellemzoIputok from './components/JellemzoInputok';
import { useDispatch, useSelector } from 'react-redux';
import { karakterActions } from '@/app/myprojects/shadowrun-in-hungary/store/karakter.slice';

export interface IJellemzo {
  tipus: string;
  key: string;
  adat: JellemzoModel;
  ertek: any;
}
interface Props {
  jellemzo: IJellemzo;
  contClass?: string;
}

export default function Jellemzo({jellemzo, contClass}: Props) {

  const karakterJellemzo = useSelector((state:any)=>state.shadowrunKarakter[jellemzo.tipus][jellemzo.key])
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(true);
  const [inputValue, setInputValue] = useState<string | number>();

  function saveInput() {
    console.log(inputValue)
    if (inputValue) {
      dispatch(karakterActions.karakterSzerkesztes({
        target: jellemzo.tipus,
        targetKey: jellemzo.key,
        ertek: inputValue
      }));
      setInputValue(undefined);
      setEditMode(false);
    }
    return
  }
  
  function resetInput() {
    setInputValue(karakterJellemzo);
  }

  return (
    <div className={cl.jellemzoCont +' '+ contClass}>

      {/* fejléc */}
      <label htmlFor={jellemzo.key} className='text2 neonWhite center'>
        {jellemzo.adat.szoveg}
      </label>

      {/* megjegyzés előtag*/}
      {editMode === true &&
        <div className='neonBlue text1'>
          {jellemzo.adat.megjegyzesElo}
        </div>
      }

      {/* érték, ha van */}
      {editMode === false &&
        <div className="neonGrey text0 center">
          {jellemzo.ertek} {jellemzo.adat.egyseg}
        </div>
      }

      {/* karakter készítés vagy szerkesztés esetén */}
      {editMode === true &&
      <>
        <JellemzoIputok jellemzo={jellemzo} setInputValue={setInputValue}></JellemzoIputok>
      </>}

      {/* megjegyzés előtag*/}
      {editMode === true && jellemzo.adat.megjegyzesUto &&
        <div className='neonBlue text1'>
          {jellemzo.adat.megjegyzesUto}
        </div>
      }

      {editMode &&
      <div className="buttonCont center">
        <Button iconType={'yes'} className='neonGreen text2' fnOnClick={saveInput}>Mentés</Button>
        <Button iconType={'no'} className='neonRed text2' fnOnClick={resetInput}>Törlés</Button>
      </div>
      }
    </div>
  );
}