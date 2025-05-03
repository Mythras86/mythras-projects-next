'use server';

import dbConnect from "@/lib/db";
import Snake from "./games.model";
import { GameDto, ScoresDto } from "./games.dto";
import { sortScores } from "./sortScores";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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

export async function updateGame(game: string, newScore: ScoresDto): Promise<void> {
    await dbConnect();

    const snake = await Snake.findOne({gameName: game});

    if (snake) {
        try { 
            const scores: Array<ScoresDto> = [...snake.gameScores, newScore];
            sortScores(scores);
            if (scores.length > 20) {
                scores.length = 20;
            }
            await Snake.findOneAndUpdate({gameName: game}, {gameScores: scores});
        } catch (error) {
            throw error;
        }
    } else {
        try {
            await Snake.findOneAndUpdate({gameName: game}, {gameScores: newScore}, {upsert: true});
        } catch (error) {
            throw error;
        }
    }

    revalidatePath('/projects/neonsnake', 'page');
    redirect('/projects/neonsnake');
}