'use client'

import { snakeActions } from "@/lib/store/snake.slice";
import { useDispatch, useSelector } from "react-redux";

interface IGameControl {
    showMe?: boolean
}

export default function GameControl({showMe = true}: IGameControl) {

    const status: string = useSelector((state: any) => state.snakeGame.status);

    const dispatch = useDispatch();

    function changeGameStatus(toThis: string, newGame: boolean) {
        if (newGame == true) {
            dispatch(snakeActions.resetSnake());
        }
        dispatch(snakeActions.changeGameStatus(toThis));
    }

    return (
        <>
        {showMe &&
            <div className="buttonCont center margBott1 margTop1">
                {(status == 'NEWGAME' || status == 'GAMEOVER') &&
                    <button className="neonGreen text2 center" type="button" onClick={()=>changeGameStatus('GOING', true)}>Start New Game</button>
                }
                {status == 'GOING' &&
                    <button className="neonYellow text2 center" type="button" onClick={()=>changeGameStatus('PAUSED', false)}>Pause Game</button>
                }
                {status == 'PAUSED' &&
                    <button className="neonGreen text2 center" type="button" onClick={()=>changeGameStatus('GOING', false)}>Resume Game</button>
                }
                {(status == 'GOING' || status == 'PAUSED') &&
                    <button className="neonRed text2 center" type="button" onClick={()=>changeGameStatus('NEWGAME', true)}>Cancel</button>
                }
            </div>
        }
        </>

    );
}

