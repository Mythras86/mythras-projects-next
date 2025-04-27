'use server';

import dbConnect from "@/lib/db";
import Snake from "./games.model";
import { GameDto } from "./games.dto";

export async function getGame(gameName: string): Promise<GameDto> {
    await dbConnect();

    try {
        const snake: GameDto | null = await Snake.findOne({gameName: gameName});
        const snakeData = JSON.parse(JSON.stringify(snake))
        return snakeData;
    } catch (error) {
        throw error;
    }
}

export async function updateGame(game: GameDto): Promise<void> {
    await dbConnect();

    try {
        await Snake.findOneAndUpdate({gameName: game.gameName}, {gameScores: game.gameScores}, {upsert: true});
    } catch (error) {
            throw error;
    }
}