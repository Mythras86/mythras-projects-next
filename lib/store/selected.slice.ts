import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISelected {
    id: string;
}

const selectedDefault: ISelected = {
    id: ''
};

const selectedSlice = createSlice({
    name: 'selected',
    initialState: selectedDefault,
    reducers: {
        select(state, action: PayloadAction<string>) {
            state.id = action.payload;
        },
        deselect(state) {
            state.id = '';
        }
    }
});

export const selectedActions = selectedSlice.actions;
export default selectedSlice.reducer;