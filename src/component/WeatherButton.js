import React from "react";
import { useDispatch } from "react-redux";
import { weatherAction } from "../redux/actions/weatherAction";

const WeatherButton = ({ cities }) => {
  const dispatch = useDispatch();

  const onSelect = (e) => {
    dispatch(weatherAction.getSelectedCityWeather(e.target.textContent));
  };

  const onCurrent = (e) => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      dispatch(weatherAction.getCurrentCityWeather(lat, lon));
    });
  };

  return (
    <div className="weather-btn">
      <button onClick={onCurrent}>Current</button>
      {cities.map((city, idx) => (
        <button onClick={onSelect} key={idx}>
          {city}
        </button>
      ))}
    </div>
  );
};

export default WeatherButton;
