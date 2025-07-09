import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IModal {
    id: string;
}

const modalDefault: IModal = {
    id: ''
};

const modalSlice = createSlice({
    name: 'modal',
    initialState: modalDefault,
    reducers: {
        openModal(state, action: PayloadAction<string>) {
            state.id = action.payload;
        },
        closeModal(state) {
            state.id = '';
        }
    }
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;