'use client';

import { snakeActions } from "@/lib/store/snake.slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function GameDetails() {

    const speed: number = useSelector((state: any)=> state.snakeGame.speed);
    const score: number = useSelector((state: any)=> state.snakeGame.score);

    return (
        <div className="flexCont margTop1 center">
            <div className="neonBlue text2 flex1">
                Score: {score}
            </div>
            <div className="neonBlue text2 flex1">
                Speed: {speed}
            </div>
        </div>
    );
}