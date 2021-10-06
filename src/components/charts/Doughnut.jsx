import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const dataValues = [30, 40, 60, 70, 5];
const toggleLegend = true;

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
        text: "Chart.js Doughnut Chart",
    },
    },
};

const data = {
    labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
    datasets: [
    {
        data: dataValues,
        backgroundColor: [
        "#77CEFF",
        "#0079AF",
        "#123E6B",
        "#97B0C4",
        "#A5C8ED",
        ],
    },
    ],
};

const DoughnutChart = () => {

    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default DoughnutChart;