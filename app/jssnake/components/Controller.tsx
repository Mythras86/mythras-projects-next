'use client'

import { snakeActions } from "@/lib/store/snake.slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Controller() {

    const snakeArray: Array<number> = useSelector((state: any) => state.snake.snakeArray);
    const table: Array<string> = useSelector((state: any) => state.snake.table);
    const [direction, changeDirection] = useState(1);

    function changeDirectionTothis(toThis: number) {
        changeDirection((initial) => toThis);
    }

    const head = snakeArray[snakeArray.length-1];
    const tail = snakeArray[0];
  
    const dispatch = useDispatch();
  
    const moveSnake = (index: number) => {
        // normally assign index to be a checkedindex
        let newHeadIndex = head+index;
        // check for real if its in range of the table
        if (newHeadIndex < 0) {
           newHeadIndex = head+table.length+index;
        }
        if (newHeadIndex > 399) {
            newHeadIndex = head-table.length+index;
        }
        if (snakeArray.find(e => e == newHeadIndex)) {
            return;
        }

        const newTable = table.map(x=>x);
        // getting head index
        newTable.splice(head, 1, 'reverseRed');
        // move the head to next tile
        newTable.splice(newHeadIndex, 1, 'reverseOrange');
        // remove tail
        newTable.splice(tail, 1, 'neonGreen');

        dispatch(snakeActions.changeTable(newTable));
        
        const newSnake: Array<number> = snakeArray.map(x=>x);
        newSnake.splice(0, 1);
        newSnake.splice(snakeArray.length-1, 0, newHeadIndex);

        console.log(newSnake)

        dispatch(snakeActions.changeSnake(newSnake));
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            moveSnake(direction);
        }, 100);
    
        return () => clearTimeout(timer);
        }, [snakeArray]
    );
        
    return (
        <div id="controllerCont">
            <button type="button" id="up" className="control neonWhite hover" onClick={()=>changeDirectionTothis(-20)}>U</button>
            <button type="button" id="left" className="control neonWhite hover" onClick={()=>changeDirectionTothis(-1)}>L</button>
            <button type="button" id="right" className="control neonWhite hover" onClick={()=>changeDirectionTothis(1)}>R</button>
            <button type="button" id="down" className="control neonWhite hover" onClick={()=>changeDirectionTothis(20)}>D</button>
        </div>
    );
}