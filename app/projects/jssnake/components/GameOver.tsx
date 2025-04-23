import Input from "@/components/auth/Input";
import "./GameOver.scss";
import { useSelector } from "react-redux";
import Overlay from "@/components/Overlay";

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
    
    const score: number = useSelector((state: any) => state.snake.score);
    const level: number = useSelector((state: any) => state.snake.level);

    return (
        <Overlay showMe={showMe}>
            <div id="gameOverCont" className="noBgScroll">
                <main>
                    <h1 className="reverseRed">Game Over</h1>
                    <h2>Your Score is: {score}</h2>
                    <h2>on Level: {level}</h2>

                    <Input label={"Name"} id={"userName"} type={"text"} />
                    <button type="button" className="text0 center neonGreen">Sign Up Score</button>

                    <div className="buttonCont center margTop1">
                        <button type="button" className="text2 reverseGreen">New Game</button>
                    </div>
                </main>
            </div>
        </Overlay>
    );
}