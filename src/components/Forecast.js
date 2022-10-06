import React from "react";
import "./Weather.css";
import WeatherCard from "./WeatherCard";

const Forecast = ({ nextEight, currentData, comingHrs, graphArr }) => {
  // console.log("Forecast fn nextEight", nextEight);
  // console.log("comingDewPoint:", nextEight[0].dew_point, nextEight[7].dew_point);
  // console.log("comingTemp:", nextEight[0].temp.day, nextEight[7].temp.day);
  // console.log("comingIcon:", nextEight[0].weather[0].icon, nextEight[7].weather[0].icon);
  // console.log("comingWeathermood:", nextEight[0].weather[0].main, nextEight[7].weather[0].main);

  // const day = nextEight[0].dew_point
  // console.log("comingDewPoint:", nextEight[0].dew_point, nextEight[7].dew_point);

  const localTime = new Date().toUTCString();
  const Today = localTime[0].concat(localTime[1]).toUpperCase();
  console.log("Today:", Today);

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
            <div
              key={i}
              className="Day_Forecast"
              // onClick={console.log("Forecast")}
            >
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

      {/* <div>
        <WeatherCard
          currentData={currentData}
          nextEight={nextEight}
          comingHrs={comingHrs}
          graphArr={graphArr}
        />
      </div> */}
    </>
  );
};

export default Forecast;
