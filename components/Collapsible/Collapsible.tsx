import React from 'react';
import cl from './Collapsible.module.scss';
import useSelectId from '@/lib/hooks/useSelectMe';

interface Props {
    collapsibleContClass?: string;
    selectId: string;
    summary: React.ReactNode;
    summaryHead: string;
    summaryHeadClass?: string;
    expanded: React.ReactNode;
    expandedHead?: React.ReactNode;
}

export default function Collapsible({
    collapsibleContClass,
    selectId,
    summary,
    summaryHead,
    summaryHeadClass,
    expanded,
    expandedHead
}: Props) {

    const {selectedId, toggleSelectId} = useSelectId();

    return (
        <>
        {/* összecsukott állapot */}
        {selectId !== selectedId &&
            <div className={cl.collapsibleCont+' '+collapsibleContClass} onClick={()=>toggleSelectId(selectId)}>
                <div className={cl.summaryHead+' '+summaryHeadClass+' '+cl.arrow}>{summaryHead}</div>
                {summary}
            </div>
        }

        {/* nyitott állapot */}
        {selectId === selectedId &&
        <div className={cl.collapsibleCont+' '+collapsibleContClass}>
            {expandedHead? 
                <div className={cl.summaryHead+' '+summaryHeadClass +' selected'} onClick={()=>toggleSelectId(selectId)}>{expandedHead}</div>
                :
                <div className={cl.collapsibleCont +' selected'} onClick={()=>toggleSelectId(selectId)}>
                    <div className={cl.summaryHead+' '+summaryHeadClass+' '+cl.arrowDown}>{summaryHead}</div>
                    {summary}
                </div>
            }
            <div className={cl.expanded +' '+cl.collapsibleCont}>{expanded}</div>
        </div>
        }
        </>
    );
}