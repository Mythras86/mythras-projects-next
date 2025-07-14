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

export interface IJellemzo {
  key: string;
  adat: JellemzoModel;
  ertek: any;
}
interface Props {
  jellemzo: IJellemzo;
  contClass?: string;
  editStatus?: boolean;
}

export default function Jellemzo({jellemzo, contClass, editStatus = false}: Props) {

  const karakterJellemzo = useSelector((state:any)=>state.shadowrunKarakter[jellemzo.key])
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(editStatus);
  const [inputValue, setInputValue] = useState<string | number>();
  const orokseg: Array<string> = Object.keys(oroksegData)

  function saveInput() {
    if (inputValue) {
      dispatch(karakterActions.karakterSzerkesztes({
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
    (document.getElementById(jellemzo.key) as HTMLInputElement).value = karakterJellemzo;
    dispatch(selectedActions.deselect())
  }

  return (
    <>
    {!editMode &&
      <div className={cl.jellemzoCont +' '+ contClass}>
        {(!orokseg.includes(jellemzo.key) || jellemzo.ertek === '') &&
          <Button iconType={'edit'} className={`neonYellow text0 ${cl.edit}`} fnOnClick={()=>setEditMode(true)}></Button>
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
                <Button iconType={'no'} fnOnClick={resetInput}>Törlés</Button>
                <Button iconType={'yes'} fnOnClick={saveInput}>Mentés</Button>
              </div>
            }
          </div>
        </main>
      </Modal>
    }
    </>
  );
}