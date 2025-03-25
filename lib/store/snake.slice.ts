import { createSlice } from "@reduxjs/toolkit";

interface ISnake {
    snakeArray: Array<number>;
    table: Array<string>;
}

const snakeStart: ISnake = {
    snakeArray: [0, 1, 2],
    table: []
};

const snakeSlice = createSlice({
    name: 'snake',
    initialState: snakeStart,
    reducers: {
        changeTable(state, actions) {
            state.table = actions.payload;
        },
        changeSnake(state, actions) {
            state.snakeArray = actions.payload;
        }
    }
});

export const snakeActions = snakeSlice.actions;
export default snakeSlice.reducer;