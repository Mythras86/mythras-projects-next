'use client';

import cl from './Jellemzo.module.scss';
import React, { useRef, useState } from 'react';
import { JellemzoModel } from './store/jellemzo.model';
import Button from '@/components/buttons/Button';
import JellemzoIputok from './components/JellemzoInputok';

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

  const [editMode, setMode] = useState(true);

  const inputRef = useRef(undefined);

  return (
    <div className={cl.jellemzoCont +' '+ contClass}>
      <Button fnOnClick={()=>setMode(true)} iconType='edit' className={`neonYellow text0 ${cl.edit}`}></Button>

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
        <div className="neonGrey text0">
          {jellemzo.ertek} {jellemzo.adat.egyseg}
        </div>
      }

      {/* karakter készítés vagy szerkesztés esetén */}
      {editMode === true &&
      <>
        <JellemzoIputok jellemzo={jellemzo}></JellemzoIputok>
      </>}

      {/* megjegyzés előtag*/}
      {editMode === true && jellemzo.adat.megjegyzesUto &&
        <div className='neonBlue text1'>
          {jellemzo.adat.megjegyzesUto}
        </div>
      }
    </div>
  );
}