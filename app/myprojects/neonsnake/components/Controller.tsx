'use client'

import "./Controller.scss";
import { snakeActions } from "@/lib/store/snake.slice";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Controller() {

    const direction: number = useSelector((state: any)=> state.snakeGame.direction);
    
    const snake: Array<number> = useSelector((state: any)=> state.snakeGame.snake);
    const head = snake[snake.length-1];
    const trueDirection = snake[snake.length-2]-head;
    const dispatch = useDispatch();

    function changeDirectionTothis(toThis: number) {
        if (trueDirection === toThis) {
            return
        } else {
            dispatch(snakeActions.changeDirection(toThis));
        }
    }

    return (
        <div id="controllerCont">
            <div>
                <button type="button" onClick={()=>changeDirectionTothis(-20)}>&#8657;</button>
            </div>
            <div className="middleCont">
                <button type="button" onClick={()=>changeDirectionTothis(-1)}>&#8656;</button>
                <button type="button" onClick={()=>changeDirectionTothis(1)}>&#8658;</button>
            </div>
            <div>
                <button type="button" onClick={()=>changeDirectionTothis(20)}>&#8659;</button>
            </div>
        </div>
    );
}