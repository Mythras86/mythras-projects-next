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
  const speed: number = useSelector((state: any)=> state.snake.speed);
  const isGameGoing: boolean = useSelector((state: any)=> state.snake.isGameGoing);

  const speedRef = useRef(speed);
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

  function dropFood() {
    const newFoods = makeFood(snake, foods);
    dispatch(snakeActions.changeFoods(newFoods));
  }

  //moving cycle
  useEffect(()=> {
    if (!isGameGoing) {
      return;
    }

    let moveTime = 510 - speedRef.current;

    const snakeMoveTime = setTimeout(() => {
      snakeMove();
    }, moveTime);

    return () => {
      clearTimeout(snakeMoveTime);
    };
  }, [snake, isGameGoing]);

  //food cycle
  useEffect(()=> {
    if (!isGameGoing) {
      return;
    }
    if (speedRef.current < 500) {
      dispatch(snakeActions.changeSpeed(speedRef.current+5));
    }

    let dropTime = 5000-speedRef.current*5;

    const foodDrops = setTimeout(() => {
      dropFood();
    }, dropTime);

    return () => {
      clearTimeout(foodDrops);
    };
  }, [foods, isGameGoing]);

  useEffect(()=>{
    speedRef.current = speed;
    directionRef.current = direction;
  }), [speed, direction];

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
      {isGameGoing &&
      <>
        <h2 className="neonPurple">Score: {score}</h2>
        <h2 className="neonPurple">Speed: {speedRef.current}</h2>
      </>
      }

      <Table></Table>
    </main>
    </>
  );
}