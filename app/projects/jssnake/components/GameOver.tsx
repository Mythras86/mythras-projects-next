import Input from "@/components/auth/Input";
import "./GameOver.scss";
import { useSelector } from "react-redux";

export default function GameOver() {

    const score: number = useSelector((state: any) => state.snake.score);
    const level: number = useSelector((state: any) => state.snake.level);

    return (
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
    );
}