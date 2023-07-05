import { createSlice } from "@reduxjs/toolkit";

export const polarAreaSlice = createSlice({
    name: 'polarArea',
    initialState: {
        options: {},
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
              {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(255, 206, 86, 0.5)',
                  'rgba(75, 192, 192, 0.5)',
                  'rgba(153, 102, 255, 0.5)',
                  'rgba(255, 159, 64, 0.5)',
                ],
                borderWidth: 1,
              },
            ],
          }
    },
    reducers: {
      polarLabels: (state, action) => {
        state.data.labels = action.payload;
      },
      polarDataName: (state, action) => {
        state.data.datasets[0].label = action.payload;
      },
      polarData: (state, action) => {
        state.data.datasets[0].data = action.payload;
      }
    }
});

export const { polarLabels, polarDataName, polarData } = polarAreaSlice.actions;
export default polarAreaSlice.reducer;