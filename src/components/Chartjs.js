import React, { useEffect, useState } from "react";
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

const Chartjs = ({ nextEight, tempChart }) => {
  // console.log("Chart", nextEight);
  // console.log("tempChart", tempChart);

  const [data, setData] = useState({
    labels: [
      ["", "6am"],
      ["", "9am"],
      ["", "12pm"],
      ["", "3pm"],
      ["", "6pm"],
      ["", "9pm"],
    ],
    datasets: [
      {
        label: "Temperature",
        data: [7, 7, 8, 1, 8, 3],

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

  useEffect(() => {
    setData({
      labels: [
        [Math.floor(tempChart[0]) + "°", "6am"],
        [Math.floor(tempChart[1]) + "°", "9am"],
        [Math.floor(tempChart[2]) + "°", "12pm"],
        [Math.floor(tempChart[3]) + "°", "3pm"],
        [Math.floor(tempChart[4]) + "°", "6pm"],
        [Math.floor(tempChart[5]) + "°", "9pm"],
      ],
      datasets: [
        {
          label: "Temperature",
          data: tempChart,

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
  }, [tempChart]);

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
