import React from "react";

const Forecast = ({ tempInfo }) => {
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

  return (
    <>
      <div className="Forecast">
        <div className="Day_Forecast">
          <p>Sun</p>
          <p>28, 19</p>
          <img
            src={"http://openweathermap.org/img/wn/" + tempInfo.icon + ".png"}
          ></img>
          <p> {tempInfo.weathermood}</p>
        </div>
        <div className="Day_Forecast">
          <p>Wed</p>
          <p>28, 19</p>
          <p>Icon</p>
          <p>Name</p>
        </div>
        <div className="Day_Forecast">
          <p>Thu</p>
          <p>28, 19</p>
          <p>Icon</p>
          <p>Name</p>
        </div>
        <div className="Day_Forecast">
          <p>Fri</p>
          <p>28, 19</p>
          <p>Icon</p>
          <p>Name</p>
        </div>
        <div className="Day_Forecast">
          <p>Sat</p>
          <p>28, 19</p>
          <p>Icon</p>
          <p>Name</p>
        </div>
      </div>
    </>
  );
};

export default Forecast;
