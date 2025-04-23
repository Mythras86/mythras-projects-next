import { createSlice } from "@reduxjs/toolkit";

interface ISnake {
    status: 'NEWGAME' | 'GOING' | 'PAUSED' | 'GAMEOVER';
    snake: Array<number>;
    direction: number;
    foods: Array<number>;
    score: number;
    speed: number;
    time: number;
}

const snakeStart: ISnake = {
    status: 'NEWGAME',
    snake: [0, 1, 2],
    direction: 1,
    foods: [],
    score: 0,
    speed: 0,
    time: 0
};

const snakeSlice = createSlice({
    name: 'snakeGame',
    initialState: snakeStart,
    reducers: {
        changeGameStatus(state, action) {
            state.status = action.payload;
        },
        changeSnake(state, action) {
            state.snake = action.payload;
        },
        changeDirection(state, action) {
            state.direction = action.payload;
        },
        changeScore(state, action) {
            state.score = action.payload;
        },
        changeFoods(state, action) {
            state.foods = action.payload;
        },
        changeSpeed(state, action) {
            state.speed = action.payload;
        },
        changeTime(state, action) {
            state.time = action.payload;
        },
        resetSnake: () => snakeStart,
    }
});

export const snakeActions = snakeSlice.actions;
export default snakeSlice.reducer;