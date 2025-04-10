import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISnake {
    isGameGoing: boolean;
    snake: Array<number>;
    direction: number;
    foods: Array<number>;
    score: number;
    speed: number;
}

const snakeStart: ISnake = {
    isGameGoing: false,
    snake: [0, 1, 2],
    direction: 1,
    foods: [],
    score: 0,
    speed: 0
};

const snakeSlice = createSlice({
    name: 'snake',
    initialState: snakeStart,
    reducers: {
        changeGameStatus(state, action) {
            state.isGameGoing = action.payload;
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
        }
    }
});

export const snakeActions = snakeSlice.actions;
export default snakeSlice.reducer;