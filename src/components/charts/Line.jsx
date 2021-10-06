import React from 'react';
import { Line } from 'react-chartjs-2';

const data1 = [40, 60, 30, 70, 15];
const data2 = [80, 50, 20, 40, 60];

const data = {
    labels: ["Seoul", "London", "Taipei", "Cairo", "Havana"],
    datasets: [
        {
            label: "The 1st poll",
            data: data1,
            fill: false,
            borderColor: 'rgba(255, 51, 106, 0.5)',
            tension: 0.3
        },
        {
            label: "The 2nd poll",
            data: data2,
            fill: false,
            borderColor: 'rgba(51, 156, 255, 0.5)',
            tension: 0.3
        },
    ],
};

const options = {
    scales: {
        y: {
            title: {
                display: true,
                text: "Popularity"
            }
        },
        x: {
            title: {
                display: true,
                text: "Countries"
            }
        }
    }
};

const LineChart = () => {

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart;