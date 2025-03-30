import { useSelector } from "react-redux";

export default function ScoreBoard() {

    const isGameGoing: boolean = useSelector((state: any)=> state.snake.isGameGoing);
    const score: number = useSelector((state: any) => state.snake.score);
    const level: number = useSelector((state: any) => state.snake.level);

    return (
        <>
        {(!isGameGoing && score != 0) &&
            <div id="score" className="gameOver">
                <div className="overlay"></div>
                <h1>Your Game is Over</h1>
            </div>
        }
        {isGameGoing &&
        <>
            <h2>Your Score is: <span>{score}</span></h2>
            <h2>on Level: <span>{level}</span></h2>
        </>
        }

        </>
    );
}