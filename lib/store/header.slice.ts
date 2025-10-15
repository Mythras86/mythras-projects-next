import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISelected {
    id: string;
}

const selectedDefault: ISelected = {
    id: 'home'
};

const headerSlice = createSlice({
    name: 'selectedHeader',
    initialState: selectedDefault,
    reducers: {
        selectHeader(state, action: PayloadAction<string>) {
            state.id = action.payload;
        },
        reset: () => selectedDefault,
    }
});

export const headerActions = headerSlice.actions;
export default headerSlice.reducer;