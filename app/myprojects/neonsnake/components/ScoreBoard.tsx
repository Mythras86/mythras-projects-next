'use client';

import './ScoreBoard.scss';
import { GameDto, ScoresDto } from "@/app/api/projects/games/games.dto";
import { Suspense, useEffect, useState } from "react";
import Score from "./Score";
import { getGame } from "@/app/api/projects/games/games.route";
import { useDispatch, useSelector } from "react-redux";
import { gameStatus, snakeActions } from "@/lib/store/snake.slice";
import LoadingSpinner from '@/components/spinners/LoadingSpinner';

export default function ScoreBoard() {

    const gameName: string = useSelector((state: any) => state.snakeGame.game.gameName);
    const gameScores: Array<ScoresDto> = useSelector((state: any) => state.snakeGame.game.gameScores);
    const status: typeof gameStatus[keyof typeof gameStatus] = useSelector((state: any) => state.snakeGame.status);
    

    const dispatch = useDispatch();

    const [isLoading, setLoading] = useState(true);

    function changeLoading(toThis: boolean) {
        setLoading(toThis);
    }
  
    useEffect(() => {
        async function getData() {
            changeLoading(true);
            try {
                const fetchedData: GameDto = await getGame(gameName);
                if (fetchedData) {
                    dispatch(snakeActions.setGame(fetchedData))
                }
            } catch(error) {
                throw error;
            }
        }
        if (status == 'NEWGAME') {
            getData();
        }
        changeLoading(false);
    }, [status])

    const [showAll, toggleShow] = useState(false);
    
    function handleShow() {
        toggleShow((prev) => !showAll);
    }

    return (
        <>
        <h2>Top Scores</h2>

       <LoadingSpinner isLoading={isLoading}>

            <div className='scoreBoard flexCont'>
                <div className="text2 neonWhite place">#</div>
                <div className="text2 neonWhite name center">Name</div>
                <div className="text2 neonWhite time">Time</div>
                <div className="text2 neonWhite score">Score</div>
            </div>

            {gameScores.length == 0 && isLoading == false &&
                <div className="neonYellow text2 center">Be the first to sign up your Best Score!</div>
            }

            {gameScores.length > 0 && isLoading == false &&                 
            gameScores.map((x, index)=>
                <Score key={index} score={x} index={index} hidden={!showAll && index>2 ? true : false} />
            )}
            
            {gameScores.length > 0 &&
                <div className="buttonCont center margTop1">
                    <button className="neonYellow text2 center" onClick={handleShow} type="button">{!showAll ? 'More' : 'Collapse'}</button>
                </div>
            }
        </LoadingSpinner>
        </>
    );
}