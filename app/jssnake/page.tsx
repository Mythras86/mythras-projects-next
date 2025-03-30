'use client'

import "./page.scss";
import Table from "./components/Table";
import ScoreBoard from "./components/Score";
import { useDispatch, useSelector } from "react-redux";
import { snakeActions } from "@/lib/store/snake.slice";
import { moveSnakeHead } from "./actions/snakeMovesHead";
import { growSnake } from "./actions/snakeMovesAndGrows";
import { newSnakeTail } from "./actions/snakeMovesTail";
import { makeFood } from "./actions/snakeFood";
import { useEffect, useRef } from "react";

export default function JSSnake() {

  const snake: Array<number> = useSelector((state: any)=> state.snake.snake);
  const foods: Array<number> = useSelector((state: any)=> state.snake.foods);
  const direction: number = useSelector((state: any)=> state.snake.direction);
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
  }, [snake, isGameGoing]);

  useEffect(()=> {
    if (!isGameGoing) {
      return;
    }
    const foodDrops = setTimeout(() => {
      levelUpAndFood();
    }, 5000);

    return () => {
      clearTimeout(foodDrops);
    };
  }, [foods, isGameGoing]);

  useEffect(()=>{
    levelRef.current = level;
    directionRef.current = direction;
  }), [level, direction];

  return (
    <>
    <title>JavaScript Snake</title>
    <main id="jssnake">
      <h1>JavaScript Snake</h1>
      <ScoreBoard></ScoreBoard>
      <Table></Table>
    </main>
    </>
  );
}