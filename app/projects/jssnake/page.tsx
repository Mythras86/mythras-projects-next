'use client'

import "./page.scss";
import Table from "./components/Table";
import { useDispatch, useSelector } from "react-redux";
import { snakeActions } from "@/lib/store/snake.slice";
import { moveSnakeHead } from "./actions/snakeMovesHead";
import { growSnake } from "./actions/snakeMovesAndGrows";
import { newSnakeTail } from "./actions/snakeMovesTail";
import { makeFood } from "./actions/snakeFood";
import { useEffect, useRef } from "react";
import { removeFood } from "./actions/snakeRemoveFood";

export default function JSSnake() {

  const snake: Array<number> = useSelector((state: any)=> state.snake.snake);
  const foods: Array<number> = useSelector((state: any)=> state.snake.foods);
  const direction: number = useSelector((state: any)=> state.snake.direction);
  const score: number = useSelector((state: any)=> state.snake.score);
  const level: number = useSelector((state: any)=> state.snake.level);
  const isGameGoing: boolean = useSelector((state: any)=> state.snake.isGameGoing);

  const levelRef = useRef(level);
  const directionRef = useRef(direction);

  const dispatch = useDispatch();

  function snakeMove() {
    const newHeadIndex = moveSnakeHead(directionRef.current, snake);
    if (newHeadIndex == -1) {
      dispatch(snakeActions.changeGameStatus(false));
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

  function levelUpAndFood() {
    dispatch(snakeActions.changeLevel(level+1));
    const newFoods = makeFood(snake, foods);
    dispatch(snakeActions.changeFoods(newFoods));
  }

  //moving cycle
  useEffect(()=> {
    if (!isGameGoing) {
      return;
    }
    let moveTime = 500 - levelRef.current*10;
    if (moveTime < 10) {
      moveTime = 10;
    }
    const snakeMoveTime = setTimeout(() => {
      snakeMove();
    }, moveTime);

    return () => {
      clearTimeout(snakeMoveTime);
    };
  }, [snake, isGameGoing, directionRef.current]);

  //food cycle
  useEffect(()=> {
    if (!isGameGoing) {
      return;
    }
    const foodDrops = setInterval(() => {
      levelUpAndFood();
    }, 5000);

    return () => {
      clearInterval(foodDrops);
    };
  }, [foods, isGameGoing]);

  useEffect(()=>{
    levelRef.current = level;
    directionRef.current = direction;
  }), [level, direction];

  function startNewGame() {
    dispatch(snakeActions.changeGameStatus(true));
  }

  return (
    <>
    {/* <GameOver></GameOver> */}
    <title>JavaScript Snake</title>
    <main id="neonSnake">
      <h1>JavaScript Snake</h1>
      {!isGameGoing &&
      <div className="buttonCont center margBott1">
        <button className="neonGreen text2 center" type="button" onClick={startNewGame}>Start New Game</button>
      </div>
      }
      <Table></Table>
    </main>
    </>
  );
}