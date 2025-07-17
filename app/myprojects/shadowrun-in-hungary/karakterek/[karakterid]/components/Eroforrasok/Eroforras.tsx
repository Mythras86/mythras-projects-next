import React from 'react';
import cl from './Eroforras.module.scss';

interface Props {
    labelClass?: string;
    alapErtek: React.ReactNode;
    kapottErtek: React.ReactNode;
    felhasznaltErtek: React.ReactNode;
    egyenleg: React.ReactNode;
}

export default function Eroforras({labelClass = 'neonWhite text0', alapErtek, kapottErtek, felhasznaltErtek, egyenleg}: Props) {

    return (
        <>
            <div className='w100 flexCont'>
                <label className={cl.label+' '+labelClass}>Alap</label>
                {alapErtek}
            </div>
            <div className='w100 flexCont'>
                <label className={cl.label+' '+labelClass}>Kapott</label>
                {kapottErtek}
            </div>
            <div className='w100 flexCont'>
                <label className={cl.label+' '+labelClass}>Elköltött</label>
                {felhasznaltErtek}
            </div>
            <div className='w100 flexCont'>
                <label className={cl.label+' '+labelClass}>Egyenleg</label>
                {egyenleg}
            </div>
        </>
    );
}