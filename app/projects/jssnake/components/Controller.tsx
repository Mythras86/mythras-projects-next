'use client'

import "./Controller.scss";
import { snakeActions } from "@/lib/store/snake.slice";
import { useDispatch, useSelector } from "react-redux";

export default function Controller() {

    const direction: number = useSelector((state: any)=> state.snake.direction);
    const dispatch = useDispatch()

    async function changeDirectionTothis(toThis: number) {
        if (direction == -toThis) {
            return;
        }
        await dispatch(snakeActions.changeDirection(toThis));
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