import React, { useState, useEffect } from "react";
import Chartjs from "./Chartjs";
import "./Weather.css";

const WeatherCard = ({ tempInfo }) => {
  const [weatherSate, setWeatherState] = useState("");

  const {
    lon,
    lat,
    temp,
    humidity,
    pressure,
    weathermood,
    icon,
    name,
    country,
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

  let MyLocalTime = new Date().toLocaleTimeString();
  console.log("MyLocalTime:", MyLocalTime);

  return (
    <>
      <div className="Bottom">
        <div className="Bottom_Top">
          <h1>26 °C</h1>
          <img
            src={"http://openweathermap.org/img/wn/" + tempInfo.icon + ".png"}
          ></img>
        </div>

        <div className="Graph">
          <Chartjs />
        </div>

        <div className="Two_Way">
          <div className="Single">
            <div>
              <h3> Pressure </h3>
              <h4> 1013 hpa </h4>
            </div>
          </div>
          <div className="Single">
            <div>
              <h3> Humidiy </h3>
              <h4> 93 % </h4>
            </div>
          </div>
        </div>

        <div className="Sun">
          <div className="Rise_Set">
            <h3>Sunrise</h3>
            <p>{MyLocalTime} </p>
          </div>
          <div className="Rise_Set">
            <h3>Sunset</h3>
            <p>{MyLocalTime} </p>
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
