'use client';

import React from 'react';
import cl from './Collapsible.module.scss';
import useSelectId from '@/lib/hooks/useSelectMe';

interface Props {
    selectId: string;
    containerClass?: string;
    summary: React.ReactNode;
    summaryClass: string;
    summaryExtra?: React.ReactNode;

    expandedHead?: string;
    expandHeadClass?: string;
    children: React.ReactNode;
}

export default function Collapsible({
    selectId,
    containerClass,
    expandedHead,
    expandHeadClass,

    summary,
    summaryClass,
    summaryExtra,

    children,
}: Props) {

    const {selectedId, toggleSelectId, getSelectedClass} = useSelectId();

    function getArrow() {
        if(selectId === selectedId) {
            return cl.arrowDown;
        } else {
            return cl.arrow;
        }
    }

    return (
        <div className={containerClass ?? cl.collapsibleCont}>
            {/* summary feltétel 1- csukott állapot, feltétel 2- nyitott, de nincs expandedHead*/}
            {(selectId !== selectedId || (selectId === selectedId && !expandedHead)) &&
            <>
                <span className={summaryClass+' '+getArrow()+' '+getSelectedClass(selectId === selectedId)} onClick={()=>toggleSelectId(selectId)}>{summary}</span>
                {summaryExtra}
            </>
            }

            {/* ha nyitott és van expandedHead*/}
            {selectId === selectedId && expandedHead &&
            <>
                <span className={expandHeadClass+' '+getArrow()+' '+getSelectedClass(selectId === selectedId)}  onClick={()=>toggleSelectId(selectId)}>{expandedHead}</span>
            </>
            }

            {/* nyitott állapot tartalom*/}
            {selectId === selectedId && 
                children
            }
        </div>
    );
}