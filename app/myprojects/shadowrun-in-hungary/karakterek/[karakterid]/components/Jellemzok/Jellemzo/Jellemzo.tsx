'use client';

import cl from './Jellemzo.module.scss';
import React, { useState } from 'react';
import { JellemzoModel } from '../store/jellemzo.model';
import Button from '@/components/Button/Button';
import JellemzoIputok from './components/JellemzoInputok';
import { useDispatch, useSelector } from 'react-redux';
import { karakterActions } from '@/app/myprojects/shadowrun-in-hungary/store/karakter.slice';
import Modal from '@/components/modal/Modal';
import { oroksegData } from '../store/jellemzok.orokseg.data';
import { KarakterDto } from '@/app/myprojects/shadowrun-in-hungary/store/karakter.dto';
import Ertek from './components/Ertek';
import Fejlec from './components/Fejlec';
import Megjegyzes from './components/Megjegyzes';
import useSelectId from '@/lib/hooks/useSelectMe';
import useKarakter from '@/lib/hooks/useKarakter';

export interface IJellemzo {
  key: string;
  adat: JellemzoModel;
  ertek: any;
}
interface Props {
  jellemzo: IJellemzo;
  contClass?: string;
  editStatus?: boolean;
  fnOnSave?: ()=>void; 
}

export default function Jellemzo({jellemzo, contClass, editStatus = false, fnOnSave}: Props) {

  const {selectedId, toggleSelectId, resetSelectId, getSelectedClass} = useSelectId();
  const {karakter, setErtek} = useKarakter();
  const karakterJellemzo: keyof KarakterDto = karakter[jellemzo.key];

  const [editMode, setEditMode] = useState(editStatus);
  const [inputValue, setInputValue] = useState<string | number>();
  const orokseg: Array<string> = Object.keys(oroksegData)

  function saveInput() {
    if (inputValue) {
      setErtek(jellemzo.key, inputValue);
      setInputValue(undefined);
      setEditMode(false);
      resetSelectId();
    }
    if(fnOnSave) {
      fnOnSave();
    }
  }
  
  function resetInput() {
    setInputValue(karakterJellemzo);
    let inputElem = (document.getElementById(jellemzo.key) as HTMLInputElement);
    if (inputElem) {
      inputElem.value = karakterJellemzo;
    }
  }

  return (
    <>
    {!editMode &&
    <>
    <div className={cl.jellemzoCont+' '+getSelectedClass(jellemzo.key === selectedId)} onClick={()=>toggleSelectId(jellemzo.key)}>
      {(!orokseg.includes(jellemzo.key) || jellemzo.ertek === '') && jellemzo.key === selectedId &&
        <Button iconType={'edit'} className={`neonYellow text0 ${cl.edit}`} onClick={()=>setEditMode(true)}></Button>
      }
      <Fejlec szoveg={jellemzo.adat.szoveg}></Fejlec>
      <Ertek ertek={jellemzo.ertek} egyseg={jellemzo.adat.egyseg} tipus={jellemzo.adat.inputTipus}></Ertek>
    </div>
    </>
    }
    {editMode &&
      <Modal closeModal={()=>setEditMode(false)} >
        <main>
          <div className={cl.jellemzoCont +' '+ contClass}>
            <Fejlec szoveg={jellemzo.adat.szoveg}></Fejlec>
            <Megjegyzes szoveg={jellemzo.adat.megjegyzesElo}></Megjegyzes>
            <JellemzoIputok jellemzo={jellemzo} inputValue={inputValue} setInputValue={setInputValue}></JellemzoIputok>
            {jellemzo.adat.megjegyzesUto &&
              <Megjegyzes szoveg={jellemzo.adat.megjegyzesUto}></Megjegyzes>
            }
            {inputValue &&
              <div className="buttonCont">
                <Button iconType={'no'} onClick={resetInput}>Törlés</Button>
                <Button iconType={'yes'} onClick={saveInput}>Mentés</Button>
              </div>
            }
          </div>
        </main>
      </Modal>
    }
    </>
  );
}