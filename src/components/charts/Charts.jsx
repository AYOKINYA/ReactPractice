import BarChart from "./Bar";
import LineChart from "./Line";
import MixedChart from "./Mixed";
import DoughnutChart from "./Doughnut";
import DoughnutGuageTextChart from "./DoughnutGaugeWithText";

const charts = () => {
    return (
        <div>
            <BarChart />
            <LineChart />
            <MixedChart />
            <DoughnutChart />
            <DoughnutGuageTextChart/>
        </div>
    )
}

export default charts;