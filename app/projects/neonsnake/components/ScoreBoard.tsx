'use client';

import { GameDto, ScoresDto } from "@/app/api/projects/games/games.dto";
import { getGame } from "@/app/api/projects/games/games.route";
import { useState, useEffect } from "react";
import Score from "./Score";
import { useSelector } from "react-redux";

interface IScoreBoard {
    scores: ScoresDto[] | undefined;
}

export default function ScoreBoard({scores}: IScoreBoard) {


    return (
        <main>
            <h2>Top Scores</h2>
            {scores &&
                <Score scores={scores} />
            }
            {!scores &&
                <div className="neonYellow text2">Be the first to sign up your best score!</div>
            }
        </main>
    );
}