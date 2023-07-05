import { createSlice } from "@reduxjs/toolkit";

export const typeSlice = createSlice({
    name: 'type',
    initialState: {
        type: ''
    },
    reducers: {
        selectedChart: (state, action) => {
            state.type = action.payload;
        }
    }
});

export const { selectedChart } = typeSlice.actions;
export default typeSlice.reducer;