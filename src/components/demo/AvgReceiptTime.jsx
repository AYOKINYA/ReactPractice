import axios from "axios";
import React, { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';

import drawDoughnutLabel from "./DoughnutLabel/core"

const toggleLegend = false;

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

const doughnutLabel = {
    id: 'doughnutLabel',
    afterDraw: (chart) => drawDoughnutLabel(chart)
};

const AvgReceiptTime = () => {

    const [chartData, setChartData] = useState({});

    useEffect(() => {
        
        axios
        .get("https://7ad89e8d-fea5-4572-a58d-82c6d3f07aa2.mock.pstmn.io/dashboard/receipttime")
        .then(
            (res) => {
                    const mean = Math.floor((res.data.GoodsReleaseMaxTime + res.data.GoodsReleaseMinTime) / 2);
                    setChartData({
                        datasets: [{
                            data: [mean, 100 - mean], // 100 is a tentative number
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
                            rotation: 200,
                            cutout: '70%',
                            borderRadius: 120
                        }]
                    });
                }
            );
    }, []);

    return (
        <div>
            <Doughnut data={chartData} options={options} plugins={[doughnutLabel]} />
        </div>
    )
}

export default AvgReceiptTime;