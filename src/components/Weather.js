import React, { useState, useEffect } from "react";
import "./Weather.css";
import WeatherCard from "./WeatherCard";
import axios from "axios";
import Chartjs from "./Chartjs";
import Forecast from "./Forecast";

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

      <div>
        <Forecast tempInfo={tempInfo} />
      </div>
      <div>
        <WeatherCard tempInfo={tempInfo} />
      </div>
    </>
  );
};

export default Weather;
