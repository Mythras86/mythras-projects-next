import { ScoresDto } from "@/app/api/projects/games/games.dto";

interface IScore {
    scores: Array<ScoresDto>;
}

export default function Score({scores}: IScore) {
    return (
        <>
        <div className="flexCont">
            <div className="text2 neonTeal flex1 center">Name</div>
            <div className="text2 neonWhite flex1 center">Time</div>
            <div className="text2 neonPurple flex1 center">Score</div>
        </div>
        { scores.map((x)=>
        <div key={x.name+x.score} className="flexCont">
            <div className="text2 neonTeal flex1">{x.name}</div>
            <div className="text2 neonWhite flex1">{x.time}</div>
            <div className="text2 neonPurple flex1">{x.score}</div>
        </div>
        )}
        </>
    );
}