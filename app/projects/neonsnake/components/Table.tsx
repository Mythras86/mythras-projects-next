'use client'

import "./Table.scss";
import { useDispatch, useSelector } from "react-redux";
import Controller from "./Controller";
import Cell from "./Cell";
import { useEffect, useRef, useState } from "react";
import { gameStatus, snakeActions } from "@/lib/store/snake.slice";
import { makeFood } from "../actions/makeFood";
import { moveSnakeHead } from "../actions/snakeMovesHead";
import { newSnakeTail } from "../actions/snakeMovesTail";
import { removeFood } from "../actions/removeFood";
import GameControl from "./GameControl";
import Overlay from "@/components/Overlay";
import GameDetail from "./GameDetails";
import { makePoop } from "../actions/makePoop";
import { showTime } from "../actions/showTime";
import { snakeEats } from "../actions/snakeEats";
import { removePoop } from "../actions/removePoop";

export default function Table() {

    const snake: Array<number> = useSelector((state: any) => state.snakeGame.snake);
    const foods: Array<number> = useSelector((state: any) => state.snakeGame.foods);
    const foodsRef = useRef(foods);
    const poops: Array<number> = useSelector((state: any) => state.snakeGame.poops);
    const status: typeof gameStatus[keyof typeof gameStatus] = useSelector((state: any) => state.snakeGame.status);
    const speed: number = useSelector((state: any)=> state.snakeGame.speed);
    const time: number = useSelector((state: any)=> state.snakeGame.time);
    const score: number = useSelector((state: any)=> state.snakeGame.score);

    const direction: number = useSelector((state: any)=> state.snakeGame.direction);
    const directionRef = useRef(direction);

    const [moveCycle, changeCycle] = useState(10);

    function handleMoveCycle() {
        changeCycle((prev) => prev+1);
    }

    const dispatch = useDispatch();

    function snakeMove() {
        const newHeadIndex = moveSnakeHead(directionRef.current, snake);
        if (newHeadIndex == -1) {
            dispatch(snakeActions.changeGameStatus(gameStatus.GAMEOVER));
        }
        // check if snake eats something
        const sneakEatsSth = snakeEats(foods, poops, newHeadIndex);
        // if its 0 then its just a move

        if (sneakEatsSth == 100) {
            dispatch(snakeActions.changeScore(score+sneakEatsSth));
            const removeSnakeFood = removeFood(foods, newHeadIndex);
            dispatch(snakeActions.changeFoods(removeSnakeFood));
            // make poop on tail last index
            const snakePoops = makePoop(snake, poops);
            dispatch(snakeActions.changePoops(snakePoops));
        }
        
        if (sneakEatsSth == -50) {
            dispatch(snakeActions.changeScore(score+sneakEatsSth));
            const removeSnakePoop = removePoop(poops, newHeadIndex);
            dispatch(snakeActions.changePoops(removeSnakePoop));
        }

        const newSnake = newSnakeTail(sneakEatsSth, newHeadIndex, snake);
        dispatch(snakeActions.changeSnake(newSnake));

    }

    function dropFoodAndSpeed() {
        const newFoods = makeFood(snake, foods, poops);
        if (speed < 500) {
            dispatch(snakeActions.changeSpeed(speed + 10));
        }
        dispatch(snakeActions.changeFoods(newFoods));
    }
    
    function cleanUpPoop() {
        const copyPoops = poops.slice();
        copyPoops.splice(copyPoops.length-1, 1);
        dispatch(snakeActions.changePoops(copyPoops));
    }

    // creating the game table
    let table: Array<number> = [];
    function createTable() {
        table = Array.from(Array(400).keys());
    }
    createTable();

    //moving cycle
    useEffect(()=> {
    if (status !== gameStatus.GOING) {
        return;
    }
    let moveTime = 510 - speed;
    dispatch(snakeActions.changeTime(time + moveTime))

    const snakeMoveTime = setTimeout(() => {
        snakeMove();
    }, moveTime);

    if (Number.isInteger(moveCycle/10)) {
        dropFoodAndSpeed();
    }
    if (Number.isInteger(poops.length > 0 && moveCycle/15)) {
        cleanUpPoop();
    }
    
    handleMoveCycle();

    return () => {
        clearTimeout(snakeMoveTime);
    };
    }, [snake, status]);

    // update direction
    useEffect(()=> {
        directionRef.current = direction;
    }, [direction])

    return (
        <>
        {(status == gameStatus.GOING || status == gameStatus.PAUSED) &&
            <Overlay>
                <main id="snakeGame">
                    <h1>Neon Snake</h1>
                    <GameControl />
                    
                    <div id="snakeTable">
                        {table.map((index) => 
                            <Cell key={index} index={index} snake={snake} foods={foods} poops={poops}></Cell>
                        )}
                        <Controller />
                    </div>
                    <div className="flexCont margTop1">
                        <GameDetail label={"Score"} data={score} />
                        <GameDetail label={"Speed"} data={speed} />
                        <GameDetail label={"Time"} data={showTime(time)} />
                    </div>
                </main>
            </Overlay>
        }
        </>
    );
}