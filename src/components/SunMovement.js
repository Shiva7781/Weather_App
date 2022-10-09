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
  //   console.log("sunrise", sunrise);
  //   console.log("sunset", sunset);

  const currentTime = new Date().getTime();
  //   console.log("currentTime:", currentTime);

  // Converting the seconds into time
  let Drise = new Date(sunrise * 1000);
  let SRise = `${Drise.getHours()}${Drise.getMinutes()}`;
  //   console.log("SRise:", SRise);

  let Dset = new Date(sunset * 1000);
  let SSet = `${Dset.getHours()}${Dset.getMinutes()}`;
  //   console.log("SSet:", SSet);

  let CurrentD = new Date(currentTime);
  let CSun = `${CurrentD.getHours()}${CurrentD.getMinutes()}`;
  //   console.log("CSun:", CSun);

  let displaySun = [SRise, CSun, SSet];
  //   let displaySun = [sunrise, currentTime, sunset];
  console.log("displaySun:", displaySun);

  const pointImage = new Image(51, 51);
  pointImage.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";

  const [data, setData] = useState({
    labels: ["Sunrise", "Current", "Sunset"],

    datasets: [
      {
        label: " Sun Movement",
        data: [7, 18, 7],

        backgroundColor: "white",
        borderWidth: "1",
        tension: "0.4",
        //   borderColor: "rgb(28,169,244)",

        //   pointStyle: "triangle",
        pointStyle: ["triangle", pointImage, "triangle"],

        //   pointHitRadius:"1",
        pointRadius: 3,
        pointBorderWidth: 3,
        fill: {
          target: "origin",
          above: " rgb(241, 241, 77, 0.3)",
          below: "gray",
        },
      },
    ],
  });

  useEffect(() => {
    setData({
      labels: ["Sunrise", "Current", "Sunset"],

      datasets: [
        {
          label: " Sun Movement",
          data: [11, 55, 11],

          backgroundColor: "white",
          borderWidth: "1",
          tension: "0.4",
          //   pointStyle: "triangle",
          pointStyle: ["triangle", pointImage, "triangle"],

          //   pointHitRadius:"1",
          pointRadius: 3,
          pointBorderWidth: 3,
          fill: {
            target: "origin",
            above: " rgb(241, 241, 77, 0.3)",
            below: "gray",
          },
        },
      ],
    });
  }, [displaySun]);

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
          drawBorder: false,
        },
      },

      x: {
        beginnZero: true,
        ticks: {
          color: "teal",
          font: { size: 15 },
        },
        grid: {
          display: false,
          drawTicks: false,
          //   drawBorder: false,
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
