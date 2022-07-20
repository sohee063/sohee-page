import React, { useEffect } from "react";
import { weatherAction } from "../redux/actions/weatherAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const WeatherBox = ({ setBackgroud, city }) => {
  const dispatch = useDispatch();
  const { currentWeather } = useSelector((state) => state.weather);
  if (
    currentWeather.weather &&
    currentWeather.weather[0].description.includes("cloud")
  ) {
    setBackgroud(
      "url(" +
        `https://i.pinimg.com/originals/20/e6/03/20e60377fb5710a7335be9bec1884877.gif` +
        ")"
    );
  } else if (
    currentWeather.weather &&
    currentWeather.weather[0].description.includes("sun")
  ) {
    setBackgroud(
      "url(" +
        `https://media.baamboozle.com/uploads/images/46796/1590519529_775185` +
        ")"
    );
  } else if (
    currentWeather.weather &&
    currentWeather.weather[0].description.includes("rain")
  ) {
    setBackgroud(
      "url(" +
        `https://media.baamboozle.com/uploads/images/428107/1631175557_7554_gif-url.gif` +
        ")"
    );
  } else {
    setBackgroud(
      "url(" +
        `https://media.baamboozle.com/uploads/images/46796/1590519529_775185` +
        ")"
    );
  }
  useEffect(() => {
    if (!city) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        dispatch(weatherAction.getCurrentCityWeather(lat, lon));
      });
    } else {
      dispatch(weatherAction.getSelectedCityWeather(city));
    }
  }, [city]);

  return (
    <div className="weather-box">
      <div>ddd</div>
      <h1 className="text">{currentWeather?.name}</h1>
      <h1 className="text">{currentWeather.main?.temp.toFixed(1)} ℃</h1>
      <h4 className="text">
        {currentWeather.weather && currentWeather.weather[0].description}
      </h4>
    </div>
  );
};

export default WeatherBox;
