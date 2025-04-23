'use client';

import "./page.scss";
import GameControl from "./components/GameControl";
import { useSelector } from "react-redux";
import Table from "./components/Table";
import GameOver from "./components/GameOver";
import { useEffect, useRef } from "react";

export default function JSSnake() {

  const status: string = useSelector((state: any) => state.snakeGame.status);

  return (
    <>
    <title>JavaScript Snake</title>
    <main id="neonSnake">
      <h1>Neon Snake</h1>
      <GameControl showMe={status === 'NEWGAME'} />
    </main>
    <Table showMe={status !== 'NEWGAME' && status !== 'GAMEOVER'} />
    <GameOver showMe={status === 'GAMEOVER'}></GameOver>
    </>
  );
}