'use client';

import "./page.scss";
import GameControl from "./components/GameControl";
import { useSelector } from "react-redux";
import Table from "./components/Table";

export default function JSSnake() {

  const status: string = useSelector((state: any) => state.snakeGame.status);

  return (
    <>
    {/* <GameOver></GameOver> */}
    <title>JavaScript Snake</title>
    <main id="neonSnake">
      <h1>Neon Snake</h1>
      <GameControl showMe={status === 'NEWGAME'} />
      <Table showMe={status !== 'NEWGAME' && status !== 'GAMEOVER'} />
    </main>
    </>
  );
}