import axios from "axios";
import React, { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';

import drawDoughnutLabel from "./DoughnutLabel/core"

const options = {
    maintainAspectRatio: false,
    responsive: false
}

const doughnutLabel = {
    id: 'doughnutLabel',
    afterDraw: (chart) => drawDoughnutLabel(chart)
};

const AvgReceiptTime = () => {

    const [chartData, setChartData] = useState({});
    const [GoodsReleaseMaxTime, setGoodsReleaseMaxTime] = useState(0);
    const [GoodsReleaseMinTime, setGoodsReleaseMinTime] = useState(0);

    useEffect(() => {
        
        const fetchData = () => {
            axios
            .get("https://7ad89e8d-fea5-4572-a58d-82c6d3f07aa2.mock.pstmn.io/dashboard/receipttime")
            .then(
                (res) => {
                        setGoodsReleaseMaxTime(res.data.GoodsReleaseMaxTime);
                        setGoodsReleaseMinTime(res.data.GoodsReleaseMinTime);

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
                    })
            .catch(
                (e) => console.error(e)
                );
            }
            
        fetchData();

        const interval = setInterval(() => {
            fetchData();
            console.log("Hi")
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Doughnut data={chartData} plugins={[doughnutLabel]} options={options} width={300} height={300}/>
            Minimum : {GoodsReleaseMinTime}
            <hr/>
            Maximum : {GoodsReleaseMaxTime}
        </div>
    )
}

export default AvgReceiptTime;