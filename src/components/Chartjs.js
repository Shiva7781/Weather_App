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

const Chartjs = ({ graphArr, nextEight, comingHrs }) => {
  // console.log("graphArr:", graphArr);
  // console.log("nextEight:", nextEight);
  // console.log("comingHrs:", comingHrs);

  const [data, setData] = useState({
    labels: [
      ["" + "°", "3am"],
      ["" + "°", "7am"],
      ["" + "°", "11am"],
      ["" + "°", "3pm"],
      ["" + "°", "7pm"],
      ["" + "°", "11pm"],
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
        [Math.floor(graphArr[0]) + "°", "3am"],
        [Math.floor(graphArr[1]) + "°", "7am"],
        [Math.floor(graphArr[2]) + "°", "11am"],
        [Math.floor(graphArr[3]) + "°", "3pm"],
        [Math.floor(graphArr[4]) + "°", "7pm"],
        [Math.floor(graphArr[5]) + "°", "11pm"],
      ],
      datasets: [
        {
          label: "Temperature",
          data: graphArr,

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
  }, [graphArr]);

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
