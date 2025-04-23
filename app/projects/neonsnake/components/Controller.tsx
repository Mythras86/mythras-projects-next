'use client'

import "./Controller.scss";
import { snakeActions } from "@/lib/store/snake.slice";
import { useDispatch, useSelector } from "react-redux";

export default function Controller() {

    const direction: number = useSelector((state: any)=> state.snakeGame.direction);
    
    const snake: Array<number> = useSelector((state: any)=> state.snakeGame.snake);
    const head = snake[snake.length-1];
    const dispatch = useDispatch();

    function changeDirectionTothis(toThis: number) {
        //prevent turning on itself
        if (direction == -toThis || snake.includes(head+toThis)) {
            return;
        }
        dispatch(snakeActions.changeDirection(toThis));
    }

    //add arrow keys to control snake
    addEventListener("keydown", (event) => {
        switch(event.key) {
            case "ArrowUp": 
                changeDirectionTothis(-20);
                break;
            case "ArrowLeft": 
                changeDirectionTothis(-1);
                break;
            case "ArrowRight": 
                changeDirectionTothis(1);
                break;
            case "ArrowDown": 
                changeDirectionTothis(20);
                break;
        }
    });

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