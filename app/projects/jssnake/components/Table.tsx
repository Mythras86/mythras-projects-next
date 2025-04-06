'use client'

import "./Table.scss";
import { useSelector } from "react-redux";
import Controller from "./Controller";

export default function Table() {

    const snake: Array<number> = useSelector((state: any) => state.snake.snake);
    const foods: Array<number> = useSelector((state: any) => state.snake.foods);

    function whatIsMyColor(index: number) {
        if (snake[snake.length-1] == index) {
            return 'reverseOrange';
        }
        if (snake.includes(index)) {
            return 'reverseRed';
        }
        if (foods.includes(index)) {
            return 'reverseBlue';
        }
        return 'neonGreen';
    }

    let table: Array<string> = [];

    function createTable() {
        table = new Array(400).fill('neonGreen');
    }

    

    createTable();

    return (
        <div id="snakeTable">
            {table.map((cell, index) => 
                <div key={index} className={`cells ${whatIsMyColor(index)}`}></div>
            )}
            <Controller></Controller>
        </div>

);
}