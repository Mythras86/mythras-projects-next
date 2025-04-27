export interface GameDto {
    gameName: string;
    gameScores: Array<ScoresDto>;
}

export interface ScoresDto {
    name: string;
    score: number;
    time: number;
    date: Date;
}