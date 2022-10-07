import React from "react";
import Chartjs from "./Chartjs";
import "./Weather.css";

const WeatherCard = ({ currentData, newCurrentD, graphArr, newGraphArr }) => {
  // console.log("currentData", currentData);
  // console.log("newCurrentD:", newCurrentD);

  const {
    Temp,
    Icon,
    Weathermood,
    Description,

    pressure,
    humidity,
    sunrise,
    sunset,
  } = currentData;

  let Pressure = newCurrentD ? newCurrentD.Pressure : pressure;
  let Humidity = newCurrentD ? newCurrentD.Humidity : humidity;

  // Converting the seconds into time
  let secR = newCurrentD ? newCurrentD.Sunrise : sunrise;
  let dateR = new Date(secR * 1000);
  let SunR = `${dateR.getHours()}:${dateR.getMinutes()}`;

  let secS = newCurrentD ? newCurrentD.Sunset : sunset;
  let dateS = new Date(secS * 1000);
  let SunS = `${dateS.getHours()}:${dateS.getMinutes()}`;

  return (
    <>
      <div className="Bottom">
        <div className="Bottom_Top">
          <div className="Bottom_Temp">
            <h1>{Math.floor(Temp)}°C</h1>

            <div className="Big_Icon">
              <img
                src={"http://openweathermap.org/img/wn/" + Icon + "@2x.png"}
                alt=""
              ></img>
            </div>
          </div>
          <h2>{Weathermood}</h2>
        </div>

        <div className="Graph">
          <Chartjs graphArr={graphArr} newGraphArr={newGraphArr} />
        </div>

        <div className="Two_Way">
          <div className="Single">
            <h3> Pressure </h3>
            <h4> {Pressure} hpa</h4>
          </div>
          <div className="Single">
            <h3> Humidiy </h3>
            <h4> {Humidity} %</h4>
          </div>
        </div>

        <div className="Sun">
          <div className="Rise_Set">
            <h3>Sunrise</h3>
            <p>{SunR}am</p>
          </div>
          <div className="Rise_Set">
            <h3>Sunset</h3>
            <p>{SunS}pm</p>
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
