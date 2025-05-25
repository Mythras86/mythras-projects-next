'use client';

import './GameDetails.scss';
import { showTime } from "../../actions/showTime";
import Controller from "./Controller";
import GameDetail from "./GameDetail";
import { useSelector } from "react-redux";

export default function GameDetails() {

    const speed: number = useSelector((state: any)=> state.snakeGame.speed);
    const time: number = useSelector((state: any)=> state.snakeGame.time);
    const score: number = useSelector((state: any)=> state.snakeGame.score);


    return (
        <div id='snakeDetails'>
            <div className='detailCont'>
                <GameDetail label={"Score"} data={score} />
                <GameDetail label={"Speed"} data={speed} />
                <GameDetail label={"Time"} data={showTime(time)} />
            </div>
            <Controller />
        </div>
        
    );
}