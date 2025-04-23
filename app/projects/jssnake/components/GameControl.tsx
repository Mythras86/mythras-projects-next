'use client'

import { snakeActions } from "@/lib/store/snake.slice";
import { useDispatch, useSelector } from "react-redux";

interface IGameControl {
    showMe?: boolean
}

export default function GameControl({showMe = true}: IGameControl) {

    const status: string = useSelector((state: any) => state.snakeGame.status);

    const dispatch = useDispatch();

    function changeGameStatus(toThis: string) {
        dispatch(snakeActions.changeGameStatus(toThis));
    }

    return (
        <>
        {showMe &&
            <div className="buttonCont center margBott1">
                {status == 'NEWGAME' &&
                    <button className="neonGreen text2 center" type="button" onClick={()=>changeGameStatus('GOING')}>Start New Game</button>
                }
                {status == 'GOING' &&
                    <button className="neonYellow text2 center" type="button" onClick={()=>changeGameStatus('PAUSED')}>Pause Game</button>
                }
                {status == 'PAUSED' &&
                    <button className="neonGreen text2 center" type="button" onClick={()=>changeGameStatus('GOING')}>Resume Game</button>
                }
            </div>
        }
        </>

    );
}

