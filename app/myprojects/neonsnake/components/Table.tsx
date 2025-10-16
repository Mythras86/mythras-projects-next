'use client'

import "./Table.scss";
import { useDispatch, useSelector } from "react-redux";
import Cell from "./Cell";
import { useEffect, useRef, useState } from "react";
import { gameStatus, snakeActions } from "@/lib/store/snake.slice";
import { makeFood } from "../actions/makeFood";
import { moveSnakeHead } from "../actions/snakeMovesHead";
import { snakeEats } from "../actions/snakeEats";
import Modal from "@/components/modal/Modal";
import GameDetails from "./details/GameDetails";
import GameControl from "./GameControl";

export default function Table() {

    const [modalOpen, changeModal] = useState<boolean>(true)

    const snake: Array<number> = useSelector((state: any) => state.snakeGame.snake);
    const foods: Array<number> = useSelector((state: any) => state.snakeGame.foods);
    const nextFood: number = useSelector((state: any)=> state.snakeGame.nextFood);
    const poops: Array<number> = useSelector((state: any) => state.snakeGame.poops);
    const poopIndexes: Array<number> = poops.map(x=>x.index);
    const poopExpires: Array<number> = poops.map(x=>x.expire);
    const status: typeof gameStatus[keyof typeof gameStatus] = useSelector((state: any) => state.snakeGame.status);
    const speed: number = useSelector((state: any)=> state.snakeGame.speed);
    const time: number = useSelector((state: any)=> state.snakeGame.time);
    const score: number = useSelector((state: any)=> state.snakeGame.score);
    
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
        const sneakEatsSth: number = snakeEats(foods, poopIndexes, newHeadIndex);
        
        // if its 0 then its just a move
        if (sneakEatsSth == 100) {
            // if its food, we need to remove one and increase score
            copyFoods = copyFoods.filter(x=>x !== newHeadIndex);
            dispatch(snakeActions.changeScore(score+sneakEatsSth));
            // make poop on tail last index and add expiration time
            copyPoops.splice(0, 0, {index: snake[0], expire: time+10000})
        } else if (sneakEatsSth == -50) {
            // remove one poop, expiration time and decrease score
            copyPoops = copyPoops.filter(x=>x.index !== newHeadIndex)
            dispatch(snakeActions.changeScore(score+sneakEatsSth));
        } else {
            // if no eating, just remove tail
            copySnake.splice(0, 1);
        }
        // then add new headindex
        copySnake.splice(snake.length, 0, newHeadIndex);
        
        
        if (nextFood < time) {
            // make food and toss it into the braket
            const newFood = makeFood(copySnake, copyFoods, poopIndexes);
            copyFoods.splice(0, 0, newFood);
            dispatch(snakeActions.changeSpeed(speed+10));
            dispatch(snakeActions.changeNextFood(nextFood+5000));
        }
        if (poopExpires.filter(x=>x < time).length > 0) {
            copyPoops = copyPoops.filter(x=>x.expire > time);
        }
        
        // tell redux the changes
        dispatch(snakeActions.changeSnake(copySnake));
        dispatch(snakeActions.changeFoods(copyFoods));
        dispatch(snakeActions.changePoops(copyPoops));
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

    function closeSnake() {
        changeModal(false);
        dispatch(snakeActions.changeGameStatus(gameStatus.NEWGAME));
    }

    return (
        <>
        {modalOpen &&
        <Modal closeModal={closeSnake}>
            <div id="gameCont">
                <h1>Neon Snake</h1>
                <div id='tableCont'>
                    <div id="snakeTable">
                        {table.map((index) => 
                            <Cell key={index} index={index} snake={snake} foods={foods} poops={poopIndexes}></Cell>
                        )}
                    </div>
                    <div id="detailsCont">
                        <GameControl />
                        <GameDetails />
                    </div>
                </div>
            </div>
        </Modal>
        }
        </>
    );
}