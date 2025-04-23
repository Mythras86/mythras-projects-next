import Input from "@/components/auth/Input";
import "./GameOver.scss";
import { useSelector } from "react-redux";
import Overlay from "@/components/Overlay";
import GameControl from "./GameControl";

interface IGameOver {
    showMe: boolean
}

// var startTime, endTime;

// function start() {
//   startTime = new Date();
// };

// function end() {
//   endTime = new Date();
//   var timeDiff = endTime - startTime; //in ms
//   // strip the ms
//   timeDiff /= 1000;

//   // get seconds 
//   var seconds = Math.round(timeDiff);
//   console.log(seconds + " seconds");
// }

export default function GameOver({showMe}: IGameOver) {
    
    const score: number = useSelector((state: any) => state.snakeGame.score);
    const speed: number = useSelector((state: any) => state.snakeGame.speed);

    return (
        <Overlay showMe={showMe}>
            <main id="gameOverCont" className="noBgScroll">
                <h1 className="reverseRed">Game Over</h1>
                <h2>Your Final Score is: {score}</h2>
                <h2>on Speed of: {speed}</h2>

                <form action="">
                    <Input label={"Name"} id={"userName"} type={"text"} />
                    <button type="button" className="text0 center neonGreen">Sign Up Score</button>
                </form>
                <GameControl></GameControl>
            </main>
        </Overlay>
    );
}