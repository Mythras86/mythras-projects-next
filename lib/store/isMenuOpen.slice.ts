import { createSlice } from "@reduxjs/toolkit";

interface Props {
    value: boolean;
}

const isMenuOpen: Props = {value: false};


const isMenuOpenSlice = createSlice({
    name: 'isMenuOpen',
    initialState: isMenuOpen,
    reducers: {
        openMenu(state) {
            state.value = true;
        },
        closeMenu(state) {
            state.value = false;
        },
        toggleMenu(state) {
            state.value = !state.value;
        }
    }
});

export const isMenuOpenActions = isMenuOpenSlice.actions;
export default isMenuOpenSlice.reducer;