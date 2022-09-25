import React, { useState, useEffect } from "react";
import "./Weather.css";
import WeatherCard from "./WeatherCard";
import axios from "axios";
import Chartjs from "./Chartjs";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("Dubai");
  const [tempInfo, setTempInfo] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=a77df68bcd9e098229cb3c8e6441dfbc`
      )
      .then((res) => {
        // console.log(res.data);

        const { lon, lat } = res.data.coord;
        const { temp, humidity, pressure } = res.data.main;
        const { main: weathermood, icon } = res.data.weather[0];
        const { name } = res.data;
        const { country, sunrise, sunset } = res.data.sys;

        console.log(`lon${lon} lat${lat}`);

        const myNewWeatherInfo = {
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
        };

        console.log(myNewWeatherInfo);
        setTempInfo(myNewWeatherInfo);
      });
  }, []);

  console.log(searchValue);

  let MyLocalTime = new Date().toLocaleTimeString();

  return (
    <>
      {/* <div>Weather_App</div> */}

      <div className="Search">
        <img
          src="https://media.istockphoto.com/vectors/map-pin-vector-glyph-icon-vector-id1193451471?k=20&m=1193451471&s=612x612&w=0&h=ve7JRaMvw6L1HBiDOTVwfbhHALPPH-nCMCgG0Z_z5NY="
          alt="Pin"
          className="Location_Icon"
        ></img>
        <input
          className="Search_Input"
          type="search"
          placeholder="Search..."
          autoComplete="off"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
          alt="Search"
          className="Search_Button"
          onClick={() => console.log("first")}
        ></img>
      </div>

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

      <WeatherCard tempInfo={tempInfo} />
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

export default Weather;
