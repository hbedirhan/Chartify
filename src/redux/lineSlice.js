import { createSlice } from "@reduxjs/toolkit";

export const lineSlice = createSlice({
  name: 'line',
  initialState: {
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Line Chart',
        },
      },
    },
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [123, 500, 200, 300, 250, 800, 620],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: [-110, -400, 140, 500, 800, 350, 640],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    },
  },
  reducers: {
    lineTitle: (state, action) => {
      state.options.plugins.title.text = action.payload;
    },
    lineDataName1: (state, action) => {
      state.data.datasets[0].label = action.payload;
    },
    lineDataName2: (state, action) => {
      state.data.datasets[1].label = action.payload;
    },
    setData1: (state, action) => {
      state.data.datasets[0].data = action.payload;
    },
    setData2: (state, action) => {
      state.data.datasets[1].data = action.payload;
    },
    setLabel: (state, action) => {
      state.data.labels = action.payload;
    }
  }
});

export const { lineTitle, lineDataName1, lineDataName2, setData1, setData2, setLabel } = lineSlice.actions;
export default lineSlice.reducer;