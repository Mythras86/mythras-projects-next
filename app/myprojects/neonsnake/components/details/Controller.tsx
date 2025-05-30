'use client'

import "./Controller.scss";
import { snakeActions } from "@/lib/store/snake.slice";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Controller() {

    const direction: number = useSelector((state: any) => state.snakeGame.direction);
    const directionRef = useRef(direction);
    
    const snake: Array<number> = useSelector((state: any) => state.snakeGame.snake);
    const snakeRef = useRef(snake);

    
    const dispatch = useDispatch();
    
    function changeDirectionTothis(toThis: number) {
        const trueDirection = snakeRef.current[snakeRef.current.length-1]-snakeRef.current[snakeRef.current.length-2];

        if (directionRef.current === -toThis || trueDirection === -toThis) {
            return;
        } else {
            dispatch(snakeActions.changeDirection(toThis));
        }
    }
    
    function handleKeyUp(event: KeyboardEvent) {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }
        
        switch (event.key) {
            case "ArrowDown":
                changeDirectionTothis(20);
                break;
            case "ArrowUp":
                changeDirectionTothis(-20);
                break;
            case "ArrowLeft":
                changeDirectionTothis(-1);
                break;
            case "ArrowRight":
                changeDirectionTothis(1);
                break;
        default:
            return;
        }
    }

    useEffect(()=> {

        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keyup", handleKeyUp)
        };
    }, []);

    useEffect(()=> {
        directionRef.current = direction;
        snakeRef.current = snake;
    }, [direction, snake])

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