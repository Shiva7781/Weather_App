import React, { useState, useEffect } from "react";

import "./Weather.css";
import Forecast from "./Forecast";
import WeatherCard from "./WeatherCard";
import axios from "axios";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("Nashik");

  const [nextEight, SetNextEight] = useState([]);
  const [currentData, setCurrentData] = useState({});
  const [comingHrs, setComingHrs] = useState([]);
  const [graphArr, setGraphArr] = useState([]);

  // // //
  useEffect(() => {
    getLatLong();
  }, []);

  const getLatLong = () => {
    if ("geolocation" in navigator) {
      // check if geolocation is supported/enabled on current browser
      navigator.geolocation.getCurrentPosition(
        function successCallback(position) {
          // for when getting location is a success

          // console.log(position);
          // console.log(
          //   "latitude",
          //   position.coords.latitude,
          //   "longitude",
          //   position.coords.longitude
          // );

          const Latitude = position.coords.latitude;
          const Longitude = position.coords.longitude;
          cityName(Latitude, Longitude);
        },

        function errorCallback(error_message) {
          // for when getting location results in an error
          console.error(
            "An error has occured while retrieving location",
            error_message
          );
        }
      );
    } else {
      // geolocation is not supported
      // get your location some other way
      console.log("geolocation is not enabled on this browser");
    }
  };
  // //

  const cityName = async (Latitude, Longitude) => {
    // console.log("cityName", Latitude, Longitude);
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${Latitude}&lon=${Longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    // console.log("cityName fn data:", res.data);

    const name = res.data.city.name;
    setSearchValue(name);
  };
  // // //

  useEffect(() => {
    getInfo();
  }, [searchValue]);

  const getInfo = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      const data = await res.json();
      // console.log("API_data 1:", data);

      const { lon, lat } = data.coord;
      // console.log(lon, lat);
      // console.log(`1_lon: ${lon} 1_lat: ${lat}`);

      EightDay(lon, lat);
    } catch (error) {
      console.log(error);
    }
  };

  const EightDay = async (lon, lat) => {
    try {
      // console.log("EightDay()", lon, lat);

      let response = await fetch(
        // `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      let data = await response.json();
      // console.log("Data", data);

      // console.log("upcomingDays:", data.daily);
      // console.log("comingDewPoint:", data.daily[0].dew_point, data.daily[7].dew_point);
      // console.log("comingTemp:", data.daily[0].temp.day, data.daily[7].temp.day);
      // console.log("comingIcon:", data.daily[0].weather[0].icon, data.daily[7].weather[0].icon);
      // console.log("comingWeathermood:", data.daily[0].weather[0].main, data.daily[7].weather[0].main);
      SetNextEight([...data.daily]);

      // console.log("currentData:", data.current);
      setCurrentData({
        Temp: data.current.temp,
        Icon: data.current.weather[0].icon,
        Weathermood: data.current.weather[0].main,
        Description: data.current.weather[0].description,
        Pressure: data.current.pressure,
        Humidity: data.current.humidity,
        sunrise: data.current.sunrise,
        sunset: data.current.sunset,
      });

      // console.log("comingHrs:", "afternoon", data.hourly[0].temp);
      setComingHrs([...data.hourly]);

      // console.log("graphArr:", data.daily[0].temp);
      setGraphArr([
        data.daily[0].temp.day,
        data.daily[0].temp.eve,
        data.daily[0].temp.max,
        data.daily[0].temp.min,
        data.daily[0].temp.morn,
        data.daily[0].temp.night,
      ]);
    } catch (error) {
      console.log("error:", error);
    }
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
          nextEight={nextEight}
          currentData={currentData}
          comingHrs={comingHrs}
          graphArr={graphArr}
        />
      </div>

      <div>
        <WeatherCard
          currentData={currentData}
          nextEight={nextEight}
          comingHrs={comingHrs}
          graphArr={graphArr}
        />
      </div>
    </>
  );
};

export default Weather;
