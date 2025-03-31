'use client'

import { useDispatch, useSelector } from "react-redux";
import Controller from "./Controller";
import { snakeActions } from "@/lib/store/snake.slice";
import ScoreBoard from "./Score";

export default function Table() {

    const snake: Array<number> = useSelector((state: any) => state.snake.snake);
    const foods: Array<number> = useSelector((state: any) => state.snake.foods);
    const isGameGoing: boolean = useSelector((state: any)=> state.snake.isGameGoing);

    const dispatch = useDispatch();


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

    
    function startNewGame() {
        dispatch(snakeActions.changeGameStatus(true));
    }

    createTable();

    return (
        <div id="snakeTable" className={isGameGoing? 'fullScreen' : ''}>
            {!isGameGoing &&
                <button className="neonGreen text2 center" type="button" onClick={startNewGame}>Start New Game</button>
            }
            <ScoreBoard></ScoreBoard>
            <main id="gameTable" hidden={!isGameGoing}>
                {table.map((cell, index) => 
                    <div key={index} className={`cells ${whatIsMyColor(index)}`}>{index}</div>
                )}
                <Controller></Controller>
            </main>
        </div>
    );
}