import React, { useState, useEffect } from "react";
import Chartjs from "./Chartjs";

const WeatherCard = ({ tempInfo }) => {
  const [weatherSate, setWeatherState] = useState("");

  const {
    lon,
    lat,
    temp,
    humidity,
    pressure,
    weathermood,
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
    <div>
      {/* <div className="Bottom">
        <div className="Bottom_Top">
          <h1>26 °C</h1>
          <h1>icon</h1>
        </div>

        <div className="Graph">
          <Chartjs />
        </div>

        <div className="Two_Way">
          <div className="Single">
            <h2> Pressure </h2>
            <h3> 1013 hpa </h3>
          </div>
          <div className="Single">
            <h2> Humiditi </h2>
            <h3> 93 % </h3>
          </div>
        </div>

        <div className="Sun">
          <div>
            <h2>Sunrise</h2>
            <p>{MyLocalTime} am</p>
          </div>
          <div>
            <h2>Sunset</h2>
            <p>{MyLocalTime} am</p>
          </div>
        </div>

        <div className="SunMovement">
          <h1>SUN</h1>
        </div>
      </div> */}
    </div>
  );
};

export default WeatherCard;
