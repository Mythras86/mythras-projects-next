import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const gameStatus = {
    NEWGAME: 'newGame',
    GOING: 'going',
    PAUSED: 'paused',
    GAMEOVER: 'gameOver',
}

interface ISnake {
    game: string;
    status: typeof gameStatus[keyof typeof gameStatus];
    snake: Array<number>;
    foods: Array<number>;
    poops: Array<number>;
    direction: number;
    score: number;
    speed: number;
    time: number;
}

const snakeStart: ISnake = {
    game: 'neonSnake',
    status: gameStatus.NEWGAME,
    snake: [0, 1, 2],
    foods: [],
    poops: [],
    direction: 1,
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
        changeScore(state, action: PayloadAction<number>) {
            state.score = action.payload;
        },
        changeSpeed(state, action: PayloadAction<number>) {
            state.speed = action.payload;
        },
        changeTime(state, action: PayloadAction<number>) {
            state.time = action.payload;
        },
        resetSnake: () => snakeStart,
    }
});

export const snakeActions = snakeSlice.actions;
export default snakeSlice.reducer;