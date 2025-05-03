'use client';

import { ScoresDto } from "@/app/api/projects/games/games.dto";
import { useEffect, useState } from "react";
import Score from "./Score";

interface IScoreBoard {
    scores: ScoresDto[] | undefined;
}

export default function ScoreBoard({scores}: IScoreBoard) {

    const [showAll, toggleShow] = useState(false);

    function handleShow() {
        toggleShow((prev) => !showAll);
    }

    return (
        <main>
            <h2>Top Scores</h2>

            <div className="flexCont">
                <div className="text2 neonWhite flex0 center">#</div>
                <div className="text2 neonWhite flex1 center">Name</div>
                <div className="text2 neonWhite flex0 center">Time</div>
                <div className="text2 neonWhite flex0 center">Score</div>
            </div>

            {scores && scores.length > 0 && scores!.map((x, index)=>
                <Score key={index} score={x} index={index} hidden={!showAll && index>2 ? true : false} />
            )}
            {!scores &&
                <div className="reverseYellow text2 center margTop1">Loading...</div>
            }
            {scores?.length == 0 &&
                <div className="neonYellow text2 center margTop1">Be the first to sign up your Score!</div>
            }

            <div className="buttonCont center margTop1">
                <button className="neonYellow text2 center" onClick={handleShow} type="button">{!showAll ? 'More' : 'Collapse'}</button>
            </div>

        </main>
    );
}