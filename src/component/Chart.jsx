import {
  Chart as ChartJs,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJs.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
);

const Chart = ({ labels, data, title, city, compareData, compareCity }) => {
  let datasets = [];

  const chartData = {
    id: 1,
    label: city,
    backgroundColor: "#211C6A",
    borderColor: "#211C6A",
    data: data,
  };

  datasets.push(chartData);

  if (compareData && compareCity) {
    const compareDataForChart = {
      id: 2,
      label: compareCity,
      backgroundColor: "#74E291",
      borderColor: "#74E291",
      data: compareData,
    };

    datasets.push(compareDataForChart);
  }

  return (
    <div className="w-[500px]">
      <h1>{title}</h1>
      <Line
        datasetIdKey="id"
        data={{
          labels: labels,
          datasets: datasets,
        }}
      />
    </div>
  );
};

export default Chart;
