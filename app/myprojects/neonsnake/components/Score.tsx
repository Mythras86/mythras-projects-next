import './ScoreBoard.scss'
import { ScoresDto } from "@/app/api/projects/games/games.dto";
import { showTime } from "../actions/showTime";

interface Props {
    score: ScoresDto;
    hidden: boolean;
    index: number;
}

export default function Score({score, hidden, index}: Props) {
    return (
        <div className="scoreBoard flexCont" hidden={hidden}>
            <div className="text0 neonGreen place">{index+1}</div>
            <div className="text0 neonTeal name">{score.name}</div>
            <div className="text0 neonWhite time">{showTime(score.time)}</div>
            <div className="text0 neonPurple score">{score.score}</div>
        </div>
    );
}