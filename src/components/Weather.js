import React, { useState, useEffect } from "react";
import "./Weather.css";
import WeatherCard from "./WeatherCard";
import axios from "axios";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo, setTempInfo] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=a77df68bcd9e098229cb3c8e6441dfbc`
      )
      .then((res) => {
        // console.log(res.data);

        const { temp, humidity, pressure } = res.data.main;
        const { main: weathermood } = res.data.weather[0];
        const { name } = res.data;
        const { country, sunrise, sunset } = res.data.sys;

        const myNewWeatherInfo = {
          temp,
          humidity,
          pressure,
          weathermood,
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
      <div>Weather_App</div>

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
          autoFocus
          autoComplete="off"
          id="search"
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
          <p>Icon</p>
          <p>Name</p>
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
          <h1>26 C</h1>
          <h1>icon</h1>
        </div>
        <div className="Graph">
          <p>Hellow</p>
          <p>Hellow</p>
          <p>Hellow</p>
          <p>Hellow</p>
          <p>Hellow</p>
          <p>Hellow</p>
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
      </div>
    </>
  );
};

export default Weather;
