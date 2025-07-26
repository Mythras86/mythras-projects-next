import React from 'react';

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
                <div className='text0 neonWhite flex0'>Alap</div>
                {alapErtek}
            </div>
            <div className='w100 flexCont'>
                <div className='text0 neonWhite flex0'>Kapott</div>
                {kapottErtek}
            </div>
            <div className='w100 flexCont'>
                <div className='text0 neonWhite flex0'>Elköltött</div>
                {felhasznaltErtek}
            </div>
            <div className='w100 flexCont'>
                <div className='text0 neonWhite flex0'>Egyenleg</div>
                {egyenleg}
            </div>
        </>
    );
}