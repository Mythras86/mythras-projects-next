'use client'

import "./Table.scss";
import { useDispatch, useSelector } from "react-redux";
import Controller from "./Controller";
import Cell from "./Cell";
import { useEffect, useRef, useState } from "react";
import { gameStatus, snakeActions } from "@/lib/store/snake.slice";
import { makeFood } from "../actions/makeFood";
import { moveSnakeHead } from "../actions/snakeMovesHead";
import GameControl from "./GameControl";
import Overlay from "@/components/Overlay";
import GameDetail from "./GameDetails";
import { showTime } from "../actions/showTime";
import { snakeEats } from "../actions/snakeEats";

export default function Table() {

    const snake: Array<number> = useSelector((state: any) => state.snakeGame.snake);
    const foods: Array<number> = useSelector((state: any) => state.snakeGame.foods);
    const poops: Array<number> = useSelector((state: any) => state.snakeGame.poops);
    const status: typeof gameStatus[keyof typeof gameStatus] = useSelector((state: any) => state.snakeGame.status);
    const speed: number = useSelector((state: any)=> state.snakeGame.speed);
    const time: number = useSelector((state: any)=> state.snakeGame.time);
    const score: number = useSelector((state: any)=> state.snakeGame.score);

    const cycle: number = useSelector((state: any)=> state.snakeGame.cycle);
    const direction: number = useSelector((state: any)=> state.snakeGame.direction);
    const directionRef = useRef(direction);

    const dispatch = useDispatch();

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
    // make copies of arrays
    let copySnake = snake.slice();
    let copyFoods = foods.slice();
    let copyPoops = poops.slice();

    let changeScore = 0;

    // also count movetime
    let moveTime = 510 - speed;

    const snakeMoveTime = setTimeout(() => {
        // lets move, by determining new sneakhead index
        const newHeadIndex: number = moveSnakeHead(directionRef.current, snake);

        // if it bites itself, we get -1 and game is over
        if (newHeadIndex == -1) {
            dispatch(snakeActions.changeGameStatus(gameStatus.GAMEOVER));
            return;
        }

        // check if snake eats something
        const sneakEatsSth: number = snakeEats(foods, poops, newHeadIndex);
        
        // if its 0 then its just a move
        if (sneakEatsSth == 100) {
            // if its food, we need to remove one and increase score
            copyFoods.filter(x=>x !== newHeadIndex);
            changeScore = sneakEatsSth;
            // make poop on tail last index
            copyPoops.splice(0, 0, snake[0])
        } else if (sneakEatsSth == -50) {
            // if its poop, remove one poop and decrease score
            copyPoops.filter(x=>x !== newHeadIndex);
            changeScore = sneakEatsSth;
        } else {
            // if no eating, just remove tail
            copySnake.splice(0, 1);
        }
        // then add new headindex
        copySnake.splice(snake.length, 0, newHeadIndex);

        
        if (Number.isInteger(cycle/10)) {
            // make food and toss it into the braket
            const newFood = makeFood(copySnake, copyFoods, copyPoops);
            copyFoods.splice(0, 0, newFood);
            dispatch(snakeActions.changeSpeed(speed+10));
        }
        if (Number.isInteger(poops.length > 0 && cycle/15)) {
            // remove poop
            copyPoops.splice(poops.length-1, 1);
        }
        
        // tell redux the changes
        dispatch(snakeActions.changeSnake(copySnake));
        dispatch(snakeActions.changeFoods(copyFoods));
        dispatch(snakeActions.changePoops(copyPoops));
        dispatch(snakeActions.changeCycle(cycle+1));
        dispatch(snakeActions.changeScore(score+changeScore));
        dispatch(snakeActions.changeTime(time+moveTime));
    }, moveTime);
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