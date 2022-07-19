import React from "react";

const WeatherButton = ({ cities, currentCity, setCity }) => {
  return (
    <div className="weather-btn">
      <button onClick={() => setCity(currentCity)}>Current</button>
      {cities.map((city) => (
        <button onClick={() => setCity(city)}>{city}</button>
      ))}
    </div>
  );
};

export default WeatherButton;
