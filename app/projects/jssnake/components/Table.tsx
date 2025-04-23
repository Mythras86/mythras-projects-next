'use client'

import "./Table.scss";
import { useDispatch, useSelector } from "react-redux";
import Controller from "./Controller";
import Cell from "./Cell";
import { useEffect, useRef, useState } from "react";
import { snakeActions } from "@/lib/store/snake.slice";
import { makeFood } from "../actions/snakeFood";
import { growSnake } from "../actions/snakeMovesAndGrows";
import { moveSnakeHead } from "../actions/snakeMovesHead";
import { newSnakeTail } from "../actions/snakeMovesTail";
import { removeFood } from "../actions/snakeRemoveFood";
import GameControl from "./GameControl";
import Overlay from "@/components/Overlay";
import GameDetails from "./GameDetails";

interface ITable {
    showMe: boolean;
}

export default function Table({showMe}: ITable) {

    const snake: Array<number> = useSelector((state: any) => state.snakeGame.snake);
    const foods: Array<number> = useSelector((state: any) => state.snakeGame.foods);
    const status: string = useSelector((state: any) => state.snakeGame.status);
    const speed: number = useSelector((state: any)=> state.snakeGame.speed);

    const direction: number = useSelector((state: any)=> state.snakeGame.direction);
    const score: number = useSelector((state: any)=> state.snakeGame.score);

    const directionRef = useRef(direction);

    const [moveCycle, changeCycle] = useState(10);

    function handleMoveCycle() {
        if (moveCycle == 10) {
            changeCycle(1);
        } else {
            changeCycle((prev) => prev+1);
        }
    }

    const dispatch = useDispatch();

    function snakeMove() {
        const newHeadIndex = moveSnakeHead(directionRef.current, snake);
        if (newHeadIndex == -1) {
            dispatch(snakeActions.changeGameStatus('GAMEOVER'));
        }
        const doesSnakeGrow = growSnake(foods, newHeadIndex);
        if (doesSnakeGrow) {
            dispatch(snakeActions.changeScore(score+100));
            const removeSnakeFood = removeFood(foods, newHeadIndex);
            dispatch(snakeActions.changeFoods(removeSnakeFood));
        }
        const newSnake = newSnakeTail(doesSnakeGrow, newHeadIndex, snake);
        dispatch(snakeActions.changeSnake(newSnake));
    }

    function dropFoodAndSpeed() {
        const newFoods = makeFood(snake, foods);
        if (speed < 500) {
            dispatch(snakeActions.changeSpeed(speed + 10));
        }
        dispatch(snakeActions.changeFoods(newFoods));
    }

    // check to have up to date data
    useEffect(()=>{
        directionRef.current = direction;
    }), [direction];
    
    // creating the game table
    let table: Array<number> = [];
    function createTable() {
        table = Array.from(Array(400).keys());
    }
    createTable();

    //moving cycle
    useEffect(()=> {
    if (status !== 'GOING') {
        return;
    }
    let moveTime = 510 - speed;
    const snakeMoveTime = setTimeout(() => {
        if (moveCycle == 10) {
            dropFoodAndSpeed();
        }
        snakeMove();
    }, moveTime);
    
    handleMoveCycle();

    return () => {
        clearTimeout(snakeMoveTime);
    };
    }, [snake, status]);

    return (
        <Overlay showMe={showMe}>
            <main>
                <GameControl />
                
                <div id="snakeTable">
                    {table.map((index) => 
                        <Cell key={index} index={index} snake={snake} foods={foods}></Cell>
                    )}
                    <Controller />
                </div>

                <GameDetails />
            </main>
        </Overlay>
    );
}