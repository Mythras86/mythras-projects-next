'use client';

import cl from './Jellemzo.module.scss';
import React, { useState } from 'react';
import { JellemzoModel } from './store/jellemzo.model';
import Button from '@/components/Button/Button';
import JellemzoIputok from './components/JellemzoInputok';
import { useDispatch, useSelector } from 'react-redux';
import { karakterActions } from '@/app/myprojects/shadowrun-in-hungary/store/karakter.slice';
import JellemzoFejlec from './components/FejlecComp';
import JellemzoMegjegyzes from './components/MegjegyzesComp';
import JellemzoErtek from './components/ErtekComp';
import Modal from '@/components/modal/Modal';
import { selectedActions } from '@/lib/store/selected.slice';
import { oroksegData } from '../../Orokseg/store/orokseg.data';
import { KarakterDto } from '@/app/myprojects/shadowrun-in-hungary/store/karakter.dto';

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

  const karakterJellemzo: keyof KarakterDto = useSelector((state:any)=>state.shadowrunKarakter[jellemzo.key])
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(editStatus);
  const [inputValue, setInputValue] = useState<string | number>();
  const orokseg: Array<string> = Object.keys(oroksegData)

  function saveInput() {
    if (inputValue) {
      dispatch(karakterActions.szerkesztes({
        targetKey: jellemzo.key,
        ertek: inputValue
      }));
      setInputValue(undefined);
      setEditMode(false);
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
    dispatch(selectedActions.deselect())
  }

  return (
    <>
    {!editMode &&
      <div className={cl.jellemzoCont +' '+ contClass}>
        {(!orokseg.includes(jellemzo.key) || jellemzo.ertek === '') &&
          <Button iconType={'edit'} className={`neonYellow text0 ${cl.edit}`} onClick={()=>setEditMode(true)}></Button>
        }
        <JellemzoFejlec id={jellemzo.key} szoveg={jellemzo.adat.szoveg}></JellemzoFejlec>
        <JellemzoErtek ertek={jellemzo.ertek} egyseg={jellemzo.adat.egyseg}></JellemzoErtek>
      </div>
    }
    {editMode &&
      <Modal closeModal={()=>setEditMode(false)} >
        <main>
          <div className={cl.jellemzoCont +' '+ contClass}>
            <JellemzoFejlec id={jellemzo.key} szoveg={jellemzo.adat.szoveg}></JellemzoFejlec>
            <JellemzoMegjegyzes szoveg={jellemzo.adat.megjegyzesElo}></JellemzoMegjegyzes>
            <JellemzoIputok jellemzo={jellemzo} inputValue={inputValue} setInputValue={setInputValue}></JellemzoIputok>
            {jellemzo.adat.megjegyzesUto &&
              <JellemzoMegjegyzes szoveg={jellemzo.adat.megjegyzesUto}></JellemzoMegjegyzes>
            }
            {inputValue &&
              <div className="buttonCont center margTop1">
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