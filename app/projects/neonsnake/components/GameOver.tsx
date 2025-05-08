import Input from "@/components/auth/Input";
import "./GameOver.scss";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "@/components/Overlay";
import GameControl from "./GameControl";
import { GameDto, ScoresDto } from "@/app/api/projects/games/games.dto";
import { updateGame } from "@/app/api/projects/games/games.route";
import { gameStatus, snakeActions } from "@/lib/store/snake.slice";
import { showTime } from "../actions/showTime";

export default function GameOver() {
    
    const game: GameDto = useSelector((state: any) => state.snakeGame.game);
    const status: typeof gameStatus[keyof typeof gameStatus] = useSelector((state: any) => state.snakeGame.status);
    const score: number = useSelector((state: any) => state.snakeGame.score);
    const speed: number = useSelector((state: any) => state.snakeGame.speed);
    const time: number = useSelector((state: any) => state.snakeGame.time);

    const dispatch = useDispatch();

    function signUpScore() {
        const playerName = (document.getElementById('playerName') as HTMLInputElement);
        if (playerName.value == '') {
            return
        }
        const newScore: ScoresDto = {
            name: playerName.value,
            score: score,
            time: time,
            date: new Date()
        };
        updateGame(game.gameName, newScore);
        dispatch(snakeActions.changeGameStatus('NEWGAME'));
    }

    return (
        <>
        {status == gameStatus.GAMEOVER &&
            <Overlay>
                <main id="gameOverCont" className="noBgScroll">
                    <h1 className="reverseRed">Game Over</h1>
                    <h2>Your Final Score is: {score}</h2>
                    <h2>on Speed of: {speed}</h2>
                    <h2>with the Time of {showTime(time)}</h2>
                    <form action="">
                        <Input label={"Name"} id={"playerName"} type={"text"} />
                        <div className="buttonCont center margBott1">
                            <button type="button" className="text0 center neonGreen" onClick={signUpScore}>Sign Up Score</button>
                        </div>
                    </form>
                    <GameControl></GameControl>
                </main>
            </Overlay>
        }
        </>
    );
}