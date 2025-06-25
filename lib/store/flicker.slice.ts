import { createSlice } from "@reduxjs/toolkit";

interface Props {
    value: boolean;
}

const flickerStatus: Props = {value: false};

const flickerSlice = createSlice({
    name: 'flickerIsOn',
    initialState: flickerStatus,
    reducers: {
        toggleFlicker(state) {
            state.value = !state.value;
        },
    }
});

export const flickerActions = flickerSlice.actions;
export default flickerSlice.reducer;