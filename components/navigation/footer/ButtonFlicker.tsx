'use client';

import { flickerActions } from "@/lib/store/flicker.slice";
import { useDispatch, useSelector } from "react-redux";

export default function ButtonFlicker() {

    const flickerIsOn = useSelector((state: any) => state.flickerIsOn.value);
    const dispatch = useDispatch();

    const toggleFlicker = () => {
        dispatch(flickerActions.toggleFlicker());
    }


    return (
        <button className="text0 neonBlue hover flickerButton" type="button" onClick={toggleFlicker}>
            Flickering {flickerIsOn? 'OFF' : 'ON'}
        </button>
    );
}