import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./Context"; // // //

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
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const Chartjs = ({ newGraphArr }) => {
  // console.log("newGraphArr:", newGraphArr);

  const { graphArr } = useContext(WeatherContext);
  // console.log("graphArr:", graphArr);

  let displayGraph = newGraphArr ? newGraphArr : graphArr;
  // console.log("displayGraph:", displayGraph);

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
        tension: "0.4",
        pointStyle: "circle",
        pointRadius: 5,
        pointBorderWidth: 3,
        fill: {
          target: "origin",
          above: "rgb(75,192,192,0.7",
          below: "gray",
        },
      },
    ],
  });

  useEffect(() => {
    setData({
      labels: [
        [Math.floor(displayGraph[0]) + "°", "3am"],
        [Math.floor(displayGraph[1]) + "°", "7am"],
        [Math.floor(displayGraph[2]) + "°", "11am"],
        [Math.floor(displayGraph[3]) + "°", "3pm"],
        [Math.floor(displayGraph[4]) + "°", "7pm"],
        [Math.floor(displayGraph[5]) + "°", "11pm"],
      ],
      datasets: [
        {
          label: "Temperature",
          data: displayGraph,

          backgroundColor: "white",
          borderColor: "rgb(28,169,244)",
          tension: "0.4",
          pointStyle: "circle",
          pointRadius: 5,
          pointBorderWidth: 3,
          fill: {
            target: "origin",
            above: "rgb(75,192,192,0.7",
            below: "gray",
          },
        },
      ],
    });
  }, [displayGraph]);

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
