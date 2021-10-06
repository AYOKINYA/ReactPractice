import React from 'react';
import { Bar } from 'react-chartjs-2';

const data1 = [40, 60, 30, 70, 15];
const data2 = [180, 150, 120, 140, 160];

const data = {
    labels: ["Seoul", "London", "Taipei", "Cairo", "Havana"],
    datasets: [
        {
            label: "The 1st poll",
            data: data1,
            backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
        {
            type: 'line',
            label: "The 2nd poll",
            data: data2,
            fill: false,
            borderColor: 'rgba(199, 51, 255, 0.5)',
            tension: 0.1
        },
    ],
};

const options = {
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: "Chart.js Mixed Chart",
        },
    },
};

const MixedChart = () => {

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    )
}

export default MixedChart;