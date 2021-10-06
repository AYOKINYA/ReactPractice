import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import drawDoughnutLabel from "./DoughnutLabel/core"

const dataValues = [65, 35];
const toggleLegend = true;

// text to write inside the doughnut chart
const texts = {
    font: 'san-serif', 
    color: 'red', // if color is not given, utils.defaults.font.color is set
    labels: [
    {
        text: "Progress",
        font: {
            size: '60'
        },
        //The color is red without given color
    },
    {
        text: "65%",
        font: {
            size: '60'
        },
        color: 'rgba(111, 163, 212, 1)'
    },
    ]
};

const doughnutLabel = {
    id: 'doughnutLabel',
    beforeDraw: (chart) => drawDoughnutLabel(chart, texts)
};

const options = {
    scales: {
        myScale: {
            type: "logarithmic",
            position: toggleLegend ? "left" : "right",
        },
    },
    plugins: {
        legend: {
            position: toggleLegend ? "top" : "bottom",
        },
        title: {
            display: true,
            text: "Chart.js Doughnut Gauge Chart",
        },
    },
};


const data = {
    datasets: [
    {
        data: dataValues,
        backgroundColor: [
        '#3ec556',
        'rgba(0, 0, 0, 0)'
        ],
        hoverBackgroundColor: [
        '#3ec556',
        'rgba(0, 0, 0, 0)'
        ],
        borderColor: [
        '#3ec556',
        'rgba(0, 0, 0, 0)'
        ],
        // borderWidth: [
        //   0,
        //   0
        // ]
        rotation: 200, // arc 색 채우는 시작점 바꾼다.
        cutout: '70%', // arc 색 두께 조절한다.
        borderRadius: 120 // arc edge 둥글게 만든다.
    },
    ],
};

const DoughnutGuageTextChart = () => {

    return (
        <div>
            <Doughnut data={data} options={options} plugins={[doughnutLabel]} />
        </div>
    )
}

export default DoughnutGuageTextChart;