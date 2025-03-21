import { useEffect, useState } from "react";
import "./IntroSlide.scss";

const introSlideData: Array<string> = [
    'Future full stack developer',
    'Avid table top lover',
    'A bit of a gamer',
    'Also a metal head :p'
];

export default function IntroSlide() {

    const[currentIndex, changeIndex] = useState(0);
    const maxIndex = introSlideData.length-1;

    function handleChangeIndexTo(value: number): void {
        if (value > maxIndex) {
            changeIndex(0);
        } else {
            changeIndex(value);
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            handleChangeIndexTo(currentIndex+1);
        }, 5000);
    
        return () => clearInterval(timer);
      }, [currentIndex]
    );

    const textList = introSlideData.map((text: any, index) =>(
        <p key={index} className="neonOrange text0 slide">{text}</p>)
    );

    return (
        <>
            {textList[currentIndex]}
        </>
    );
    
}