import React from 'react'
import { selectedChart } from '../redux/typeSlice'
import { useDispatch } from 'react-redux';

function Select() {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(selectedChart(event.target.value));
      };

    return (
        <>
            <h1>Chartify</h1>
            <select onClick={handleChange}>
                <option value="Line" key="line">Line</option>
                <option value="Bar" key="bar">Bar</option>
                <option value="Pie" key="pie">Pie</option>
                <option value="Doughnut" key="doughnut">Doughnut</option>
                <option value="PolarArea" key="polarArea">PolarArea</option>
                <option value="Radar" key="radar">Radar</option>
                <option value="Scatter" key="scatter">Scatter</option>
            </select>
        </>
    )
}

export default Select