import { useSelector } from "react-redux";

export default function ScoreBoard() {

    const isGameGoing: boolean = useSelector((state: any)=> state.snake.isGameGoing);
    const score: number = useSelector((state: any) => state.snake.score);
    const level: number = useSelector((state: any) => state.snake.level);

    return (
        <>
        {isGameGoing &&
            <div id="scoreBoard">
                <h2>Your Score is: {score}</h2>
                <h2>on Level: {level}</h2>
            </div>
        }
        </>
    );
}