'use client'

import { snakeActions } from "@/lib/store/snake.slice";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Controller() {

    const snake: Array<number> = useSelector((state: any) => state.snake.snakeArray);
    const table: Array<string> = useSelector((state: any) => state.snake.table);
    const [direction, changeDirection] = useState(1);
    const directionRef = useRef(direction);

    function changeDirectionTothis(toThis: number) {
        if (direction != -toThis) {
            changeDirection((initial) => toThis);
        }
        return;
    }

    const head = snake[snake.length-1];
    const tail = snake[0];
  
    const dispatch = useDispatch();
  
    const moveSnake = (direction: number) => {
        // assign index to be a checkedindex as default
        let newHeadIndex = head+direction;
        // check for real if its in range of the table
        if (newHeadIndex < 0) {
           newHeadIndex = head+table.length+direction;
        }
        if (newHeadIndex > 399) {
            newHeadIndex = head-table.length+direction;
        }
        if (snake.find(e => e == newHeadIndex)) {
            return;
        }

        // moving the snake on the table
        // get a copy of the table
        const newTable = table.map(x=>x);
        // getting previous head index and paint it to red 
        newTable.splice(head, 1, 'reverseRed');
        // move the head to next tile and paint to orange
        newTable.splice(newHeadIndex, 1, 'reverseOrange');
        // remove tail 
        newTable.splice(tail, 1, 'neonGreen');
        // send new table to redux
        dispatch(snakeActions.changeTable(newTable));
        
        // refresh snakes array
        // get previous snake copy
        const newSnake: Array<number> = snake.map(x=>x);
        // remove tail by deleting the first number of the array
        newSnake.splice(0, 1);
        // insert head after the last index
        newSnake.splice(snake.length-1, 0, newHeadIndex);
        // send new snake to redux
        dispatch(snakeActions.changeSnake(newSnake));
    }

    function makeFood() {
        const random =  Math.floor( Math.random() * (399 - 0) + 0);
        console.log(random)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            moveSnake(directionRef.current);
            makeFood()
        }, 1000);
    
        return () => clearTimeout(timer);
        }, [snake]
    );

    useEffect(() => {
        directionRef.current = direction;
      }, [direction]
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