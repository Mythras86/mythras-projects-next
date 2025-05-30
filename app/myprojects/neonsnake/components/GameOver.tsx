'use client';

import Input from "@/components/forms/FormInput";
import "./GameOver.scss";
import { useDispatch, useSelector } from "react-redux";
import GameControl from "./GameControl";
import { GameDto, ScoresDto } from "@/app/api/projects/games/games.dto";
import { updateGame } from "@/app/api/projects/games/games.route";
import { snakeActions } from "@/lib/store/snake.slice";
import { showTime } from "../actions/showTime";
import Modal from "@/components/modal/Modal";
import { modalActions } from "@/lib/store/modal.slice";

export default function GameOver() {
    
    const game: GameDto = useSelector((state: any) => state.snakeGame.game);
    const score: number = useSelector((state: any) => state.snakeGame.score);
    const speed: number = useSelector((state: any) => state.snakeGame.speed);
    const time: number = useSelector((state: any) => state.snakeGame.time);
    const modalIds: Array<string> = useSelector((state: any) => state.modal.modalIds);
    const modalId: string = 'snakeGameOver';

    const dispatch = useDispatch();

    function signUpScore() {
        const playerName = (document.getElementById('playerName') as HTMLInputElement);
        if (playerName.value == '') {
            return
        }
        const newScore: ScoresDto = {
            name: playerName.value,
            score: score,
            time: time,
            date: new Date()
        };
        updateGame(game.gameName, newScore);
        closeModal();
    }
    
    function closeModal() {
        dispatch(modalActions.closeModal(modalId))
        dispatch(snakeActions.changeGameStatus('NEWGAME'));
    }

    return (
        <>
        {modalIds.includes(modalId) &&
        <Modal modalId={modalId} closeModal={closeModal}>
            <div id="gameOverCont" className="noBgScroll">
                <h1 className="reverseRed">Game Over</h1>
                <h2>Your Final Score is: {score}</h2>
                <h2>on Speed of: {speed}</h2>
                <h2>with the Time of {showTime(time)}</h2>
                <form action="">
                    <Input label={"Name"} id={"playerName"} type={"text"} />
                    <div className="buttonCont center margBott1">
                        <button type="button" className="text0 center neonGreen" onClick={signUpScore}>Sign Up Score</button>
                    </div>
                </form>
                <GameControl />
            </div>
        </Modal>
        }
        </>
    );
}