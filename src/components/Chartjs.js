import React, { useState } from "react";
import "./Chart.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  // Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
  // Filler
);

const Chartjs = () => {
  const [labels, setLabels] = useState([
    "jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Dec",
  ]);
  const [tempData, setTempData] = useState([50, 100, 150, 10, 77, 55]);

  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: "Temperature",
        data: tempData,

        backgroundColor: "white",
        borderColor: "rgb(28,169,244)",
        tension: "0.5",
        pointStyle: "circle",
        pointRadius: 5,
        pointBorderWidth: 3,
        // fill: true,
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginnZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
        },
      },

      x: {
        beginnZero: true,
        ticks: {
          color: "teal",
          font: { size: 16 },
        },
        grid: {
          // display: false,
          drawTicks: false,
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div className="Chart">
      {/* <h3>Chart</h3> */}
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default Chartjs;
