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

/*
Labels for graph
Data labels
Dataset Label
Data
color

*/

const Chart = ({ labels, data, color, title }) => {
  return (
    <div className="w-[500px]">
      <h1>{title}</h1>
      <Line
        datasetIdKey="id"
        data={{
          labels: labels,
          datasets: [
            {
              id: 1,
              label: "City 1",
              backgroundColor: color,
              borderColor: color,
              data: data,
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;
