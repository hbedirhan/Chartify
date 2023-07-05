import { createSlice } from "@reduxjs/toolkit";

export const barSlice = createSlice({
    name: 'bar',
    initialState: {
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Bar Chart',
                },
            },
        },
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [605, 117, 644, 312, 339, 502, 459],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                    label: 'Dataset 2',
                    data: [838, 582, 300, 446, 259, 524, 92],
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ],
        }
    },
    reducers: {
        barTitle: (state, action) => {
            state.options.plugins.title.text = action.payload;
        },
        barDataname1: (state, action) => {
            state.data.datasets[0].label = action.payload;
        },
        barDataname2: (state, action) => {
            state.data.datasets[1].label = action.payload;
        },
        barData1: (state, action) => {
            state.data.datasets[0].data = action.payload;
        },
        barData2: (state, action) => {
            state.data.datasets[1].data = action.payload;
        },
        barLabel: (state, action) => {
            state.data.labels = action.payload;
        }
    }
});

export const { barTitle, barDataname1, barDataname2, barData1, barData2, barLabel} = barSlice.actions;
export default barSlice.reducer;