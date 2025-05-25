import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IModal {
    modalIds: Array<string>;
}

const modalDefault: IModal = {
    modalIds: []
};

const modalSlice = createSlice({
    name: 'modal',
    initialState: modalDefault,
    reducers: {
        openModal(state, action: PayloadAction<string>) {
            state.modalIds.splice(0, 0, action.payload);
        },
        closeModal(state, action: PayloadAction<string>) {
            state.modalIds = state.modalIds.filter(x=>x !== action.payload);
        },
    }
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;