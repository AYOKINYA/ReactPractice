import React from 'react';
import { Bar } from 'react-chartjs-2';

const dataValues = [40, 60, 30, 70, 15]; // 이 데이터를 나중에 redux에서 useSelector로 가져와야 할 듯?

const data = {
    labels: ["Seoul", "London"],
    datasets: [
        {
            label: "The 1st data set",
            data: dataValues,
            backgroundColor: ['#77CEFF','#97B0C4'],
            categoryPercentage: 1.0,
            barPercentage: 0.5,
        },
    ],
};

const options = {
    plugins: {
        legend: {
            display: false
        },
    },
    scales: {
        y: {display: false},
        x: {display: false}
    },
    maintainAspectRatio : false,
    responsive: false
}

// TODO : compare heights of bars in pair and draw the gaps accordingly
const drawGap = function(chart) {
    const {ctx} = chart;

    const x1 = chart._metasets[0].data[0].x;
    const y1 = chart._metasets[0].data[0].y;
    const w1 = chart._metasets[0].data[0].width;

    const x2 = chart._metasets[0].data[1].x;
    const y2 = chart._metasets[0].data[1].y;
    const w2 = chart._metasets[0].data[1].width;

    ctx.beginPath();
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 5
    ctx.setLineDash([5, 3]);
    ctx.moveTo(x2 + w2 / 2, y2 - ctx.lineWidth); //From
    ctx.lineTo(x1 - w1 / 2, y2 - ctx.lineWidth); //To
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 5
    ctx.setLineDash([5, 3]);
    ctx.moveTo(x2 + w2 / 2, y1 - ctx.lineWidth);
    ctx.lineTo(x1 - w2 / 2, y1 - ctx.lineWidth);
    ctx.stroke();
}

const barGap = {
    id: 'barGap',
    afterDraw: (chart) => drawGap(chart)
}

const BarChart = () => {

    return (
        
        <div>
            <Bar data={data} options={options} plugins={[barGap]} width={"100px"} height={"150px"} />
        </div>
    )
}

export default BarChart;
