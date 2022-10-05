import React from "react";
import "./Weather.css";

const Forecast = ({ tempInfo, nextEight, tempChart }) => {
  const {
    // lon,
    // lat,

    // humidity,
    // pressure,
    weathermood,

    // id,
    // name,
    // country,
    // sunrise,
    // sunset,
  } = tempInfo;

  // console.log(tempInfo);
  // console.log(lat, lon);
  // console.log(nextEight);
  // console.log(nextEight[0].weather[0].icon);

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
      <div className="Seven_Forecast">
        {nextEight.map((e, i) => {
          return (
            <div key={i} className="Day_Forecast">
              {/* <h3>{e.weather[0].icon}</h3> */}

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
                alt="S"
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
