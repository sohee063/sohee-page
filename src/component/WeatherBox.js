import React from "react";

const WeatherBox = ({ weather, setBackgroud }) => {
  if (weather?.weather[0].description.includes("cloud")) {
    setBackgroud(
      "url(" +
        `https://i.pinimg.com/originals/20/e6/03/20e60377fb5710a7335be9bec1884877.gif` +
        ")"
    );
  } else if (weather?.weather[0].description.includes("sun")) {
    setBackgroud(
      "url(" +
        `https://media.baamboozle.com/uploads/images/46796/1590519529_775185` +
        ")"
    );
  } else if (weather?.weather[0].description.includes("rain")) {
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

  return (
    <div className="weather-box">
      <h1 className="text">{weather?.name}</h1>
      <h1 className="text">{weather?.main.temp.toFixed(1)} ℃</h1>
      <h4 className="text">{weather?.weather[0].description}</h4>
    </div>
  );
};

export default WeatherBox;
