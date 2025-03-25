'use client'

import { useSelector } from "react-redux";
import Controller from "./Controller";

export default function Table() {

    const snakeArray: Array<string> = useSelector((state: any) => state.snake.snakeArray);
    const table: Array<string> = useSelector((state: any) => state.snake.table);

    return (
        <div id="gameTable">
            <>
            {table.map((cell, index) => 
                <div key={index} className={`cells ${cell}`}>{index}</div>
            )}
            <Controller></Controller>
        </>
        </div>
    );
}