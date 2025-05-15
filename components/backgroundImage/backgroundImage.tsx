'use client'

import Image from "next/image";
import "./backgroundImage.scss";
import bgAllo from "@/public/images/kiserlet4allo.svg";
import bgFekvo from "@/public/images/kiserlet4fekvo.svg";
import { useSelector } from "react-redux";

export default function BackgroundImage() {
    const flickerIsOn = useSelector((state: any) => state.flickerIsOn.value);
    
    return (
        <div id="dragonImageCont">
            <Image className="imgAllo" src={bgAllo} alt="bg" placeholder="blur" blurDataURL="@/public/images/kiserlet4allo.svg"/>
            <Image className="imgFekvo" src={bgFekvo} alt="bg" placeholder="blur" blurDataURL="@/public/images/kiserlet4fekvo.svg"/>
            <div className={`layer ${flickerIsOn ? 'flicker' : ''}`}></div>
        </div>
    );
}