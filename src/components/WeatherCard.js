import React, { useState, useEffect } from "react";
import Chartjs from "./Chartjs";
import "./Weather.css";

const WeatherCard = ({ tempInfo }) => {
  const [weatherSate, setWeatherState] = useState("");

  const {
    // lon,
    // lat,
    // temp,
    // humidity,
    // pressure,
    weathermood,
    icon,
    // name,
    // country,
    sunrise,
    sunset,
  } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloud");
          break;

        case "Haze":
          setWeatherState("wi-day-cloud");
          break;

        case "Clear":
          setWeatherState("wi-day-cloud");
          break;

        default:
          setWeatherState("wi-day-cloud");
          break;
      }
    }
  }, [weathermood]);

  // Converting the seconds into time
  let secR = sunrise;
  let dateR = new Date(secR * 1000);
  let timeR = `${dateR.getHours()}:${dateR.getMinutes()}`;

  let secS = sunset;
  let dateS = new Date(secS * 1000);
  let timeS = `${dateS.getHours()}:${dateS.getMinutes()}`;

  // let MyLocalTime = new Date().toLocaleTimeString();
  // console.log("MyLocalTime:", MyLocalTime);

  return (
    <>
      <div className="Bottom">
        <div className="Bottom_Top">
          {/* <h1>{Temperature} °C</h1> */}
          <h1>{Math.floor(tempInfo.temp)}°C</h1>
          <div className="Big_Icon">
            <img
              src={"http://openweathermap.org/img/wn/" + icon + ".png"}
              alt="S"
            ></img>
          </div>
        </div>

        <div className="Graph">
          <Chartjs />
        </div>

        <div className="Two_Way">
          <div className="Single">
            <h3> Pressure </h3>
            <h4> {tempInfo.pressure} hpa</h4>
          </div>
          <div className="Single">
            <h3> Humidiy </h3>
            <h4> {tempInfo.humidity} %</h4>
          </div>
        </div>

        <div className="Sun">
          <div className="Rise_Set">
            <h3>Sunrise</h3>
            <p>{timeR}am</p>
          </div>
          <div className="Rise_Set">
            <h3>Sunset</h3>
            <p>{timeS}pm</p>
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
