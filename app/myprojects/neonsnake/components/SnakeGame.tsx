'use client';

import { gameStatus } from "@/lib/store/snake.slice";
import { useSelector } from "react-redux";
import GameControl from "./GameControl";
import GameOver from "./GameOver";
import ScoreBoard from "./ScoreBoard";
import Table from "./Table";

export default function SnakeGamePage() {

    const status: typeof gameStatus[keyof typeof gameStatus] = useSelector((state: any) => state.snakeGame.status);

    return (
        <>
        <GameControl />
        <ScoreBoard />
        {(status === gameStatus.GOING || status === gameStatus.PAUSED) &&
            <Table key={'snakeTable'} />
        }
        {status === gameStatus.GAMEOVER &&
            <GameOver />
        }
        </>
    );
}