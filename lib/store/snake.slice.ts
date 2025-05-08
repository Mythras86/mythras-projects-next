import { GameDto, ScoresDto } from "@/app/api/projects/games/games.dto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const gameStatus = {
    NEWGAME: 'NEWGAME',
    GOING: 'GOING',
    PAUSED: 'PAUSED',
    GAMEOVER: 'GAMEOVER',
}

interface ISnake {
    game: GameDto;
    status: typeof gameStatus[keyof typeof gameStatus];
    snake: Array<number>;
    foods: Array<number>;
    poops: Array<number>;
    direction: number;
    cycle: number;
    score: number;
    speed: number;
    time: number;
}

const snakeStart: ISnake = {
    game: {
        gameName: 'neonSnake',
        gameScores: []
    },
    status: gameStatus.NEWGAME,
    snake: [0, 1, 2],
    foods: [],
    poops: [],
    direction: 1,
    cycle: 10,
    score: 0,
    speed: 0,
    time: 0
};

const snakeSlice = createSlice({
    name: 'snakeGame',
    initialState: snakeStart,
    reducers: {
        changeGameStatus(state, action: PayloadAction<typeof gameStatus[keyof typeof gameStatus]>) {
            state.status = action.payload;
        },
        changeSnake(state, action: PayloadAction<Array<number>>) {
            state.snake = action.payload;
        },
        changeFoods(state, action: PayloadAction<Array<number>>) {
            state.foods = action.payload;
        },
        changePoops(state, action: PayloadAction<Array<number>>) {
            state.poops = action.payload;
        },
        changeDirection(state, action: PayloadAction<number>) {
            state.direction = action.payload;
        },
        changeCycle(state, action: PayloadAction<number>) {
            state.cycle = action.payload;
        },
        changeScore(state, action: PayloadAction<number>) {
            state.score = action.payload;
        },
        changeSpeed(state, action: PayloadAction<number>) {
            state.speed = action.payload;
        },
        changeTime(state, action: PayloadAction<number>) {
            state.time = action.payload;
        },
        setGame(state, action: PayloadAction<GameDto>) {
            state.game = action.payload;
        },
        resetSnake: () => snakeStart,
    }
});

export const snakeActions = snakeSlice.actions;
export default snakeSlice.reducer;