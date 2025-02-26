import { createSlice } from "@reduxjs/toolkit";

interface IAuthStatus {
    value: boolean;
}

const authStatus: IAuthStatus = {value: false};

const authSlice = createSlice({
    name: 'auth',
    initialState: authStatus,
    reducers: {
        login(state) {
            state.value = true;
        },
        logout(state) {
            state.value = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;