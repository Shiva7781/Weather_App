import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
import Forecast from "./Forecast";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo, setTempInfo] = useState({});
  const [nextEight, SetNextEight] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=a77df68bcd9e098229cb3c8e6441dfbc`
      )
      .then((res) => {
        // console.log(res.data);
        const { lon, lat } = res.data.coord;
        const { temp, humidity, pressure } = res.data.main;
        const { main: weathermood, icon, id } = res.data.weather[0];
        const { name } = res.data;
        const { country, sunrise, sunset } = res.data.sys;
        // console.log(`lon${lon} lat${lat}`);
        const myNewWeatherInfo = {
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
        };
        console.log("myNewWeatherInfo", myNewWeatherInfo);
        setTempInfo(myNewWeatherInfo);

        EightDay(myNewWeatherInfo.lat, myNewWeatherInfo.lon);
      });
  }, []);

  // console.log(searchValue);

  const EightDay = async (lat, lon) => {
    // console.log(lat, lon);

    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&cnt=6&appid=a77df68bcd9e098229cb3c8e6441dfbc&units=metric`
    );
    let data = await response.json();
    // console.log("data:", data);

    SetNextEight([...data.daily]);
    // console.log(nextEight);
  };

  // let MyLocalTime = new Date().toLocaleTimeString();

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
          onClick={() => console.log("Click")}
        ></img>
      </div>

      <div>
        <Forecast tempInfo={tempInfo} nextEight={nextEight} />
      </div>
      <div>
        <WeatherCard tempInfo={tempInfo} />
      </div>
    </>
  );
};

export default Weather;
