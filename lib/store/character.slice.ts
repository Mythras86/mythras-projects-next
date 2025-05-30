import { IKarakter } from "@/app/api/projects/shadowrunInHungary/ujkarakter.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const uresKarakter = {
    tulajdonosNev: '',
    tulajdonosId: '',

};

const karakterSlice = createSlice({
    name: 'ShadowrunKarakter',
    initialState: uresKarakter,
    reducers: {
        resetKarakter: () => uresKarakter,
    }
});

export const karakterActions = karakterSlice.actions;
export default karakterSlice.reducer;