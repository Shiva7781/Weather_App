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

  return (
    <>
      <div className="Seven_Forecast">
        {nextEight.map((e, i) => {
          return (
            <div key={i} className="Day_Forecast">
              {/* <h3>{e.weather[0].icon}</h3> */}
              <h3>{i === 0 ? "Today" : "Day" + " " + Number(i + 1)}</h3>
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
