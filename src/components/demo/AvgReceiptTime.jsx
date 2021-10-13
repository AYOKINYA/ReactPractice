import axios from "axios";
import React, { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';

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

const AvgReceiptTime = () => {

    const [chartData, setChartData] = useState({});

    useEffect(() => {
        
        axios
        .get("https://7ad89e8d-fea5-4572-a58d-82c6d3f07aa2.mock.pstmn.io/dashboard/receipttime")
        .then(
            (res) => {
                    setChartData({
                        datasets: [{
                            data: Object.values(res.data),
                            backgroundColor: [
                                "#77CEFF",
                                "#0079AF",
                            ]
                        }]
                    })
                }
            );
    }, []);

    return (
        <div>
            <Doughnut data={chartData} options={options} />
        </div>
    )
}

export default AvgReceiptTime;