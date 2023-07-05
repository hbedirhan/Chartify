import React from 'react'
import { useSelector } from 'react-redux';
import Select from './Select'
import Data from './Data'
import Line from './Line'
import Bar from './Bar'
import Pie from './Pie'
import Doughnut from './Doughnut'
import PolarArea from './PolarArea'
import Radar from './Radar'
import Scatter from './Scatter'


function Home() {

  const type = useSelector(state => state.type.type);

  let Component;

  switch (type) {
    case 'Line':
      Component = Line;
      break;
    case 'Bar':
      Component = Bar;
      break;
    case 'Pie':
      Component = Pie;
      break;
    case 'Doughnut':
      Component = Doughnut;
      break;
    case 'PolarArea':
      Component = PolarArea;
      break;
    case 'Radar':
      Component = Radar;
      break;
    case 'Scatter':
      Component = Scatter;
      break;
    default:
      Component = Line;
      break;
  }

  return (
    <>
        <Select />
        {Component && <Component /> }
        <Data/>
        
    </>
  )
}

export default Home;