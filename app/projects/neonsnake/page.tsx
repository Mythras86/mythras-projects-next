'use client';

import "./page.scss";
import GameControl from "./components/GameControl";
import Table from "./components/Table";
import GameOver from "./components/GameOver";
import ScoreBoard from "./components/ScoreBoard";
import { GameDto, ScoresDto } from "@/app/api/projects/games/games.dto";
import { getGame } from "@/app/api/projects/games/games.route";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function JSSnake() {

  const game: string = useSelector((state: any) => state.snakeGame.game);

  const [data, setData] = useState<GameDto | undefined>(undefined);
  const [scores, setScores] = useState<ScoresDto[]>();

  useEffect(() => {
    async function getData() {
        try {
            const fetchedData: GameDto = await getGame(game);
            if (fetchedData) {
                setData(fetchedData);
                setScores(fetchedData.gameScores)
            }
        } catch(error) {
            throw error;
        }
    }
    if (!data) {
        getData();
    }
  }, [])
  

  return (
    <>
    <title>Neon Snake</title>
    <main id="neonSnake">
      <h1>Neon Snake</h1>

      <h2>Main Rules</h2>

      <p className="text0 neonWhite rule">
        Arrow keys work, but you have a nice controller too!
      </p>
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
        Snakey moves with the speed of light... or it will at last. Every step takes 510ms (a little more then a half second) minus the Speed. Speed is capped at 500, so if you can reach it, you can go every 10ms a step! :D
      </p>
      <p className="text0 neonWhite rule">
        Food Drops and Speed are tied to step cycles: every 10th step is a Food Drop and +10 Speed, just keep up with it :p
      </p>
      <p className="text0 neonWhite rule">
        Also no walls, yeeey! But keep in mind where you have gone, or there might be an accident :O
      </p>

      <GameControl />
    </main>
    <ScoreBoard scores={scores} />
    <Table />
    <GameOver />
    </>
  );
}