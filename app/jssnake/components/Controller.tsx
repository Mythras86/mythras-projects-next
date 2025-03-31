'use client'

import { snakeActions } from "@/lib/store/snake.slice";
import { useDispatch, useSelector } from "react-redux";

export default function Controller() {

    const direction: number = useSelector((state: any)=> state.snake.direction);
    const dispatch = useDispatch()

    function changeDirectionTothis(toThis: number) {
        if (direction == -toThis) {
            return;
        }
        dispatch(snakeActions.changeDirection(toThis));
    }

    return (
        <div id="controllerCont">
            <div>
                <button type="button" onClick={()=>changeDirectionTothis(-20)}>U</button>
            </div>
            <div>
                <button type="button" onClick={()=>changeDirectionTothis(-1)}>L</button>
                <button type="button" onClick={()=>changeDirectionTothis(1)}>R</button>
            </div>
            <div>
                <button type="button" onClick={()=>changeDirectionTothis(20)}>D</button>
            </div>
        </div>
    );
}