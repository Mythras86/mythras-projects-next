import { ScoresDto } from "@/app/api/projects/games/games.dto";
import { showTime } from "../actions/showTime";

interface IScore {
    score: ScoresDto;
    hidden: boolean;
    index: number;
}

export default function Score({score, hidden, index}: IScore) {
    return (
        <div className="flexCont" hidden={hidden}>
            <div className="text2 neonGreen flex0">{index+1}</div>
            <div className="text2 neonTeal flex1">{score.name}</div>
            <div className="text2 neonWhite flex0">{showTime(score.time)}</div>
            <div className="text2 neonPurple flex0">{score.score}</div>
        </div>
    );
}