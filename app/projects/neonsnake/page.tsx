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

      <h2>Main Rules</h2>

      <p className="text0 neonWhite rule">
        <span className="square reverseYellow"></span>
        This is snake Head. It goes where you want it, but cant turn around!
      </p>
      <p className="text0 neonWhite rule">
        <span className="square reverseBlue"></span>
        This is snake Food. Eat them to get Score and grow bigger!
      </p>
      <p className="text0 neonWhite rule">
        <span className="square reverseRed"></span>
        This is snake Body. Watch out, if snake bites itself things go brrr :(
      </p>
      <p className="text0 neonWhite rule">
        Also no walls, yeeey! But keep in mind where you have gone, or there might be an accident :O
      </p>

      <GameControl showMe={status === 'NEWGAME'} />
    </main>
    <Table showMe={status !== 'NEWGAME' && status !== 'GAMEOVER'} />
    <GameOver showMe={status === 'GAMEOVER'}></GameOver>
    </>
  );
}