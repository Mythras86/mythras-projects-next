import "./page.scss";
import GameControl from "./components/GameControl";
import Table from "./components/Table";
import GameOver from "./components/GameOver";
import ScoreBoard from "./components/ScoreBoard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Neon Snake',
};

export default function JSSnakeComp() {

  return (
    <main id="neonSnake">
      <h1>Neon Snake</h1>

      <h2>Main Rules</h2>

      <div className="margBott1">
        <p className="text0 neonWhite rule">
          You have a nice transparent controller to help snake go round, eat, grow and have the best Score around the World :D
        </p>
        <p className="text0 neonWhite rule">
          <span className="square reverseYellow"></span>
          This is snake Head. It goes where you want it, but cant turn around!
        </p>
        <p className="text0 neonWhite rule">
          <span className="square reverseBlue"></span>
          This is snake Food. Eat them to get +100 Points and grow bigger!
        </p>
        <p className="text0 neonWhite rule">
          <span className="square reverseBrown"></span>
          Sneak eats then it poops... dont eat poop because you get bigger and get -50 Points :O
        </p>
        <p className="text0 neonWhite rule">
          <span className="square reverseRed"></span>
          This is snake Body. Watch out, if snake bites itself things go brrr :(
        </p>
        <p className="text0 neonWhite rule">
          Snakey moves with the speed of light... or it will at last. Every step takes 510ms (a little more then a half second) minus the Speed. Speed is capped at 500, but dont worry, you wont play dat long hehe :D
        </p>
        <p className="text0 neonWhite rule">
          Food Drops and Speed are tied to time: every 5 seconds food drops and speed increases by 10 :p
        </p>
        <p className="text0 neonWhite rule">
          Snakey also dont like when room is messy, so every poop is on a timer for 10 seconds, then its cleared from table :)
        </p>
        <p className="text0 neonWhite rule">
          Also no walls, hurray! But keep in mind where you have gone, or there might be an accident :O
        </p>
        <p className="text0 neonWhite rule">
          Arrow keys are also working on PC, but gotta find some fix for a weird bug... aaand i only needed some crying and voila, fixed it :D
        </p>
      </div>

      <Table />
      <GameControl />
      <ScoreBoard />
      <GameOver />
    </main>
  );
}