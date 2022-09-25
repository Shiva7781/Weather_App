import React, { useState } from "react";
import "./Weather.css";

const Forecast = ({ tempInfo, nextEight }) => {
  const {
    lon,
    lat,
    temp,
    humidity,
    pressure,
    weathermood,
    icon,
    id,
    name,
    country,
    sunrise,
    sunset,
  } = tempInfo;

  // console.log(tempInfo);
  // console.log(lat, lon);
  console.log(nextEight);
  // console.log(nextEight[0].weather[0].icon);

  return (
    <>
      <div className="Seven_Forecast">
        {nextEight.map((e, i) => {
          return (
            <div key={i} className="Day_Forecast">
              <h3>{e.weather[0].icon}</h3>
              <h3>{e.temp.day}</h3>
              <img
                src={
                  "http://openweathermap.org/img/wn/" +
                  e.weather[0].icon +
                  ".png"
                }
              ></img>
              <p>{weathermood}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Forecast;
