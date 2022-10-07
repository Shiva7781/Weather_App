import React, { useEffect, useState } from "react";
import "./Weather.css";
import WeatherCard from "./WeatherCard";

const Forecast = ({ nextEight, currentData, graphArr }) => {
  // console.log("nextEight:", nextEight.length > 1 ? nextEight : "Loading");

  const [value, setValue] = useState(0);
  const [newGraphArr, setNewGraphArr] = useState([]);
  const [newCurrentD, setNewCurrentD] = useState({});

  // console.log("value:", value);
  // console.log("newGraphArr:", newGraphArr);
  // console.log("newCurrentD:", newCurrentD);

  useEffect(() => {
    setNewGraphArr(
      nextEight.length > 1
        ? [
            nextEight[value].temp.min,
            nextEight[value].temp.morn,
            nextEight[value].temp.day,
            nextEight[value].temp.max,
            nextEight[value].temp.eve,
            nextEight[value].temp.night,
          ]
        : null
    );

    setNewCurrentD(
      nextEight.length > 1
        ? {
            ["Pressure"]: nextEight[value].pressure,
            ["Humidity"]: nextEight[value].humidity,
            ["Sunrise"]: nextEight[value].sunrise,
            ["Sunset"]: nextEight[value].sunset,
          }
        : null
    );
  }, [value]);

  const localTime = new Date().toUTCString();
  // console.log("localTime:", localTime);

  const Today = localTime[0].concat(localTime[1]).toUpperCase();
  // console.log("Today:", Today);

  const days1 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const days2 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"];
  const days3 = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue"];
  const days4 = ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"];
  const days5 = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"];
  const days6 = ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const days7 = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      <div className="ComingDays_Forecast">
        {nextEight.map((e, i) => {
          return (
            <div key={i} className="Day_Forecast" onClick={() => setValue(i)}>
              <h3>
                {Today === "SU"
                  ? days1[i]
                  : Today === "MO"
                  ? days2[i]
                  : Today === "TU"
                  ? days3[i]
                  : Today === "WE"
                  ? days4[i]
                  : Today === "TH"
                  ? days5[i]
                  : Today === "FR"
                  ? days6[i]
                  : Today === "SA"
                  ? days7[i]
                  : ""}
              </h3>
              <h3>{e.temp.day}</h3>
              <img
                src={
                  "http://openweathermap.org/img/wn/" +
                  e.weather[0].icon +
                  "@2x.png"
                }
                alt=""
              ></img>
              <p>{e.weather[0].main}</p>
            </div>
          );
        })}
      </div>

      <div>
        <WeatherCard
          currentData={currentData}
          newCurrentD={newCurrentD}
          graphArr={graphArr}
          newGraphArr={newGraphArr}
        />
      </div>
    </>
  );
};

export default Forecast;
