'use client';

import Input from "@/components/forms/FormInput";
import { useDispatch, useSelector } from "react-redux";
import GameControl from "./GameControl";
import { GameDto, ScoresDto } from "@/app/api/projects/games/games.dto";
import { updateGame } from "@/app/api/projects/games/games.route";
import { gameStatus, snakeActions } from "@/lib/store/snake.slice";
import { showTime } from "../actions/showTime";
import Modal from "@/components/modal/Modal";
import { useState } from "react";

export default function GameOver() {

    const [modalOpen, changeModal] = useState<boolean>(true)
    
    const status: typeof gameStatus[keyof typeof gameStatus] = useSelector((state: any) => state.snakeGame.status);
    const game: GameDto = useSelector((state: any) => state.snakeGame.game);
    const score: number = useSelector((state: any) => state.snakeGame.score);
    const speed: number = useSelector((state: any) => state.snakeGame.speed);
    const time: number = useSelector((state: any) => state.snakeGame.time);

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
        changeModal(false)
        dispatch(snakeActions.changeGameStatus('NEWGAME'));
    }

    return (
        <>
        {modalOpen &&
        <Modal closeModal={closeModal}>
            <main className="noBgScroll">
                <h1 className="reverseRed">Game Over</h1>
                <h2>Your Final Score is: {score}</h2>
                <h2>on Speed of: {speed}</h2>
                <h2>with the Time of {showTime(time)}</h2>
                <Input label={"Name"} id={"playerName"} type={"text"} />
                <div className="buttonCont center margBott1 ">
                    <button type="button" className="text0 center neonGreen" onClick={signUpScore}>Sign Up Score</button>
                </div>
                <GameControl></GameControl>
            </main>
        </Modal>
        }
        </>
    );
}