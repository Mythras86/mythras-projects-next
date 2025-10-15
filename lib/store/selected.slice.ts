import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISelected {
    id: string;
}

const selectedDefault: ISelected = {
    id: ''
};

const selectedSlice = createSlice({
    name: 'selected',
    initialState: selectedDefault,
    reducers: {
        selectId(state, action: PayloadAction<string>) {
            state.id = action.payload;
        },
        reset: () => selectedDefault,
    }
});

export const selectedActions = selectedSlice.actions;
export default selectedSlice.reducer;