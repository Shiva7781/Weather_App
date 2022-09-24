import React, { useState, useEffect } from "react";

const WeatherCard = ({ tempInfo }) => {
  const [weatherSate, setWeatherState] = useState("");

  const {
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

  let DateLocal = new Date().toLocaleDateString();
  console.log("timeLocal:", DateLocal);

  return <div>WeatherCard</div>;
};

export default WeatherCard;
