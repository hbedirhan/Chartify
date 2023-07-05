import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar, Pie, Doughnut, PolarArea, Radar, Scatter, Bubble } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

export function Data() {
  
  const type = useSelector(state => state.type.type);

  let options;
  let data;
  let ChartComponent;
  
  switch (type) {
    case 'Line':
      ChartComponent = Line;
      options = useSelector(state => state.line.options);
      data = useSelector(state => state.line.data);
      break;
    case 'Bar':
      ChartComponent = Bar;
      options = useSelector(state => state.bar.options);
      data = useSelector(state => state.bar.data);
      break;
    case 'Pie':
      ChartComponent = Pie;
      options = useSelector(state => state.pie.options);
      data = useSelector(state => state.pie.data);
      break;
    case 'Doughnut':
      ChartComponent = Doughnut;
      options = useSelector(state => state.pie.options);
      data = useSelector(state => state.pie.data);
      break;
    case 'PolarArea':
      ChartComponent = PolarArea;
      options = useSelector(state => state.polarArea.options);
      data = useSelector(state => state.polarArea.data);
      break;
    case 'Radar':
      ChartComponent = Radar;
      options = useSelector(state => state.radar.options);
      data = useSelector(state => state.radar.data);
      break;
    case 'Scatter':
      ChartComponent = Scatter;
      options = useSelector(state => state.scatter.options);
      data = useSelector(state => state.scatter.data);
      break;
    default:
      ChartComponent = Line;
      options = useSelector(state => state.line.options);
      data = useSelector(state => state.line.data);
      break;
  };

  return (
    <>
      {ChartComponent && <ChartComponent className='chart' options={options} data={data} />}
    </>
  );
}

export default Data;