'use client';

import React, { useState } from "react";
import cl from "./Selectable.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectedActions } from "@/lib/store/selected.slice";

interface Props {
    selectId: string;
    className?: string;
    selectAction: ()=> void;
    children: React.ReactNode;
}

export default function SelectableComp({selectId, className, selectAction, children}: Props) {

    const selected = useSelector((state: any) => state.selected.id)
    
    const dispatch = useDispatch()

    function selectMe(selectId: string) {
        if (selectId === selected) {
            dispatch(selectedActions.deselect());
        } else {
            dispatch(selectedActions.select(selectId));
        }
        selectAction();
    }

    return (
        <div onClick={()=>selectMe(selectId)} 
        className={selectId === selected? className+' '+cl.selected+' '+cl.selectCont : className+' '+cl.selectCont}>
            {children}
        </div>
    );
}