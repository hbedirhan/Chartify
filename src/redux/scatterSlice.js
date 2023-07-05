import { createSlice } from "@reduxjs/toolkit";

export const scatterSlice = createSlice({
    name: 'scatter',
    initialState: {
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
        data: {
            datasets: [
                {
                    label: 'A dataset',
                    data: [
                        { x: 37, y: -70 },
                        { x: -87, y: 4 },
                        { x: -96, y: 98 },
                        { x: -3, y: -91 },
                        { x: 60, y: -8 },
                        { x: -56, y: 75 },
                        { x: 79, y: 73 },
                    ],
                    backgroundColor: 'rgba(255, 99, 132, 1)',
                },
            ],
        }
    },
    reducers: {
        scatterDataName: (state, action) => {
            state.data.datasets[0].label = action.payload;
        },
        scatterData: (state, action) => {
            state.data.datasets[0].data = action.payload;
        }
    }
});

export const { scatterDataName, scatterData } = scatterSlice.actions;
export default scatterSlice.reducer;