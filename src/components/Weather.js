import React, { useState, useEffect } from "react";
import "./Weather.css";
import Forecast from "./Forecast";
import WeatherCard from "./WeatherCard";
import axios from "axios";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("Pune");
  const [tempInfo, setTempInfo] = useState({});
  const [nextEight, SetNextEight] = useState([]);
  const [temperature, setTemperature] = useState("");
  const [temperatureIcon, setTemperatureIcon] = useState("");
  const [tempChart, setTempChart] = useState([]);

  useEffect(() => {
    getInfo();
  }, [searchValue]);

  const getInfo = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        let data = res.data;

        // console.log("JSON data:", data);

        const { lon, lat } = data.coord;
        const { humidity, pressure } = data.main;
        const { main: weathermood, id } = data.weather[0];
        const { name } = data;
        const { country, sunrise, sunset } = data.sys;

        const myNewWeatherInfo = {
          lon,
          lat,

          humidity,
          pressure,
          weathermood,

          id,
          name,
          country,
          sunrise,
          sunset,
        };
        // console.log("myNewWeatherInfo", myNewWeatherInfo);
        setTempInfo(myNewWeatherInfo);

        console.log("lat:", myNewWeatherInfo.lat, "lon", myNewWeatherInfo.lon);
        EightDay(myNewWeatherInfo.lat, myNewWeatherInfo.lon);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const EightDay = async (lat, lon) => {
    // console.log(lat, lon);

    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&cnt=6&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    let data = await response.json();
    // console.log("data:", data.daily);
    // console.log("data1 Temp:", data.daily[0].temp.day);
    setTemperature(data.daily[0].temp.day);
    setTemperatureIcon(data.daily[0].weather[0].icon);

    SetNextEight([...data.daily]);
    // console.log("nextEight", data.daily);
    setTempChart([
      data.daily[0].temp.min,
      data.daily[0].temp.morn,
      data.daily[0].temp.day,
      data.daily[0].temp.max,
      data.daily[0].temp.eve,
      data.daily[0].temp.night,
    ]);
  };

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
        <Forecast
          tempInfo={tempInfo}
          nextEight={nextEight}
          tempChart={tempChart}
        />
      </div>

      <div>
        <WeatherCard
          tempInfo={tempInfo}
          nextEight={nextEight}
          temperature={temperature}
          temperatureIcon={temperatureIcon}
          tempChart={tempChart}
        />
      </div>
    </>
  );
};

export default Weather;
