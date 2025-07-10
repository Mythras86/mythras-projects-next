'use client'

import { modalActions } from "@/lib/store/modal.slice";
import { gameStatus, snakeActions } from "@/lib/store/snake.slice";
import { useDispatch, useSelector } from "react-redux";

export default function GameControl() {

    const status: typeof gameStatus[keyof typeof gameStatus] = useSelector((state: any) => state.snakeGame.status);
    const modalIds: Array<string> = useSelector((state: any) => state.modal.modalIds);

    const dispatch = useDispatch();

    function changeGameStatus(toThis: typeof status, newGame: boolean) {
        if (newGame == true) {
            if (modalIds.includes('snakeTableModal')) {
                dispatch(modalActions.closeModal());
            }
            dispatch(modalActions.openModal('snakeTableModal'));
            dispatch(snakeActions.resetSnake());
        }
        dispatch(snakeActions.changeGameStatus(toThis));
    }
    
    return (
        <div className="buttonCont center margBott1">
            {(status == gameStatus.NEWGAME || status == gameStatus.GAMEOVER) &&
                <button className="neonGreen text2 center" type="button" onClick={()=>changeGameStatus(gameStatus.GOING, true)}>Start New Game</button>
            }
            {status == gameStatus.GOING &&
                <button className="neonYellow text2 center" type="button" onClick={()=>changeGameStatus(gameStatus.PAUSED, false)}>Pause Game</button>
            }
            {status == gameStatus.PAUSED &&
                <button className="neonGreen text2 center" type="button" onClick={()=>changeGameStatus(gameStatus.GOING, false)}>Resume Game</button>
            }
        </div>

    );
}

