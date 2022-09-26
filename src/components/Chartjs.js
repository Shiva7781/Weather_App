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

const Chartjs = ({ nextEight, tempChart }) => {
  // console.log("Chart", nextEight);
  console.log("tempChart", tempChart);

  const initialState2 = [25, 27, 29, 30, 28, 27];

  const initialState = initialState2.map((e) => {
    var min = e - 4;
    var max = e + 5;

    return Math.floor(Math.random() * (+max - +min) + +min);
  });
  console.log("initialState:", initialState);

  const [labels, setLabels] = useState([
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
  ]);

  const [tempData, setTempData] = useState([...initialState]);
  // setTempData(initialState);

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
