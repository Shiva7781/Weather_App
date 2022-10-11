import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./Context"; // // //

import "./SunMovement.css";
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

const SunMovement = () => {
  const { currentData } = useContext(WeatherContext);
  //   console.log("currentData:", currentData);

  const { sunrise, sunset } = currentData;
  // console.log("sunrise", sunrise);
  // console.log("sunset", sunset);

  const currentSec = new Date().getTime();
  // console.log("currentSec:", currentSec);

  /** */
  /** Converting the seconds into time */

  let riseTime = new Date(sunrise * 1000);
  // console.log("riseTime:", riseTime);
  let SRise = `${riseTime.getHours()}`;
  //   console.log("SRise:", SRise);

  let setTime = new Date(sunset * 1000);
  let SSet = `${setTime.getHours()}`;
  //   console.log("SSet:", SSet);

  let currentTime = new Date(currentSec);
  let SCurrent = `${currentTime.getHours()}`;
  //   console.log("SCurrent:", SCurrent);

  // SSet = 7;

  // eslint-disable-next-line
  let displaySun = [SRise, SCurrent, SSet];
  // console.log("displaySun:", displaySun);

  const pointImage1 = new Image(77, 77);
  pointImage1.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";

  const pointImage2 = new Image(55, 55);
  pointImage2.src = "https://cdn-icons-png.flaticon.com/128/1823/1823324.png";
  // pointImage2.src = "https://cdn-icons-png.flaticon.com/128/2024/2024058.png";
  // pointImage2.src = "https://cdn-icons-png.flaticon.com/128/547/547433.png";

  const [data, setData] = useState({
    labels: ["Sunrise", "", "Sunset"],

    datasets: [
      {
        label: " Sun Position",
        data: [0, SCurrent, 0],
        backgroundColor: "white",
        borderWidth: "1",
        tension: "0.4",

        // borderColor: "rgb(28,169,244)",
        // pointStyle: "triangle",

        pointStyle: ["triangle", pointImage1, "triangle"],
        pointHitRadius: "1",
        pointRadius: 3,
        pointBorderWidth: 3,
        fill: {
          target: "origin",
          above: "rgb(241, 241, 77, 0.3)",
          below: "rgb(53, 53, 53, 0.9)",
        },
      },
    ],
  });

  /** */
  /** Checking Day/Night */

  useEffect(() => {
    let A = "Sunrise";
    let B = "Sunset";
    let myLabel = " Sun Position";
    let myFillColor = "rgb(241, 241, 77, 0.5)";
    let myImage = pointImage1;

    if (SCurrent > SSet) {
      A = "Sunset";
      B = "Sunrise";
      myLabel = " Moon Position";
      myFillColor = "rgb(53, 53, 53, 3)";
      myImage = pointImage2;
    }
    console.log("SSet:", SSet);
    console.log("SCurrent:", SCurrent);

    setData({
      labels: [A, "", B],
      datasets: [
        {
          label: myLabel,
          data: [0, SCurrent, 0],
          backgroundColor: myFillColor,
          borderWidth: "1",
          tension: "0.4",

          // borderColor: "rgb(28,169,244)",

          pointStyle: ["triangle", myImage, "triangle"],
          pointHitRadius: "1",
          pointRadius: 3,
          pointBorderWidth: 3,
          fill: true,
        },
      ],
    });

    // eslint-disable-next-line
  }, [SSet, SCurrent]);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        beginnZero: true,
        // max: 25,

        ticks: {
          color: "teal",
          font: { size: 15 },
        },
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
      },

      y: {
        beginnZero: true,
        max: 25,

        ticks: {
          display: false,
        },

        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div className="Sun_Movement">
      {/* <h3>SUN_MOVEMENT</h3> */}
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default SunMovement;
