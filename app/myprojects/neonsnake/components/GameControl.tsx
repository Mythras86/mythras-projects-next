'use client'

import { gameStatus, snakeActions } from "@/lib/store/snake.slice";
import { useDispatch, useSelector } from "react-redux";

interface IGameControl {
    showMe?: boolean
}

export default function GameControl({showMe = true}: IGameControl) {

    const status: typeof gameStatus[keyof typeof gameStatus] = useSelector((state: any) => state.snakeGame.status);

    const dispatch = useDispatch();

    function changeGameStatus(toThis: typeof status, newGame: boolean) {
        if (newGame == true) {
            dispatch(snakeActions.resetSnake());
        }
        dispatch(snakeActions.changeGameStatus(toThis));
    }
    
    return (
        <>
        {showMe &&
            <div className="buttonCont center margBott1 margTop1">
                {(status == gameStatus.NEWGAME || status == gameStatus.GAMEOVER) &&
                    <button className="neonGreen text2 center" type="button" onClick={()=>changeGameStatus(gameStatus.GOING, true)}>Start New Game</button>
                }
                {status == gameStatus.GOING &&
                    <button className="neonYellow text2 center" type="button" onClick={()=>changeGameStatus(gameStatus.PAUSED, false)}>Pause Game</button>
                }
                {status == gameStatus.PAUSED &&
                    <button className="neonGreen text2 center" type="button" onClick={()=>changeGameStatus(gameStatus.GOING, false)}>Resume Game</button>
                }
                {(status == gameStatus.GOING || status == gameStatus.PAUSED) &&
                    <button className="neonRed text2 center" type="button" onClick={()=>changeGameStatus(gameStatus.NEWGAME, true)}>Cancel</button>
                }
            </div>
        }
        </>

    );
}

