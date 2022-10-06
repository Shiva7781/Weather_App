import React from "react";
// import React, { useState, useEffect } from "react";
import Chartjs from "./Chartjs";
import "./Weather.css";

const WeatherCard = ({ currentData, nextEight, comingHrs, graphArr }) => {
  // console.log("currentData", currentData);
  // console.log("WeatherCard", nextEight);
  // console.log('comingHrs:', comingHrs)
  // console.log('graphArr:', graphArr)

  // console.log("currentData", currentData);
  const {
    Temp,
    Icon,
    Weathermood,
    Description,
    Pressure,
    Humidity,
    sunrise,
    sunset,
  } = currentData;

  // Converting the seconds into time
  let secR = sunrise;
  let dateR = new Date(secR * 1000);
  let SunR = `${dateR.getHours()}:${dateR.getMinutes()}`;

  let secS = sunset;
  let dateS = new Date(secS * 1000);
  let SunS = `${dateS.getHours()}:${dateS.getMinutes()}`;

  return (
    <>
      <div className="Bottom">
        <div className="Bottom_Top">
          <div className="Bottom_Temp">
            <h1>{Math.floor(Temp)}°C</h1>

            <div className="Big_Icon">
              <img
                src={"http://openweathermap.org/img/wn/" + Icon + "@2x.png"}
                alt=""
              ></img>
            </div>
          </div>
          <h2>{Weathermood}</h2>
        </div>

        <div className="Graph">
          <Chartjs
            graphArr={graphArr}
            nextEight={nextEight}
            comingHrs={comingHrs}
          />
        </div>

        <div className="Two_Way">
          <div className="Single">
            <h3> Pressure </h3>
            <h4> {Pressure} hpa</h4>
          </div>
          <div className="Single">
            <h3> Humidiy </h3>
            <h4> {Humidity} %</h4>
          </div>
        </div>

        <div className="Sun">
          <div className="Rise_Set">
            <h3>sunrise</h3>
            <p>{SunR}am</p>
          </div>
          <div className="Rise_Set">
            <h3>sunset</h3>
            <p>{SunS}pm</p>
          </div>
        </div>

        <div className="SunMovement">
          <h3>SUN_MOVEMENT</h3>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
