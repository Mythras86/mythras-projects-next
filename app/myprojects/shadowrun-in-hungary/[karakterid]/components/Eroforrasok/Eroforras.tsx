import React from 'react';

interface Props {
    headText: string;
    headClass: string;
    labelClass?: string;
    alapErtek: React.ReactNode;
    kapottErtek: React.ReactNode;
    felhasznaltErtek: React.ReactNode;
    egyenleg: React.ReactNode;
}

export default function Eroforras({headText, headClass, labelClass = 'text0 neonWhite flex0', alapErtek, kapottErtek, felhasznaltErtek, egyenleg}: Props) {

    return (
        <div className='flexRow w100 margBott1'>
            <h2 className={headClass}>{headText}</h2>

            <div className='w100 flexRow'>
                <div className={labelClass}>Alap</div>
                {alapErtek}
            </div>
            <div className='w100 flexRow'>
                <div className={labelClass}>Kapott</div>
                {kapottErtek}
            </div>
            <div className='w100 flexRow'>
                <div className={labelClass}>Elköltött</div>
                {felhasznaltErtek}
            </div>
            <div className='w100 flexRow'>
                <div className={labelClass}>Egyenleg</div>
                {egyenleg}
            </div>
        </div>
    );
}