import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import WeatherBox from "../../component/WeatherBox";
import WeatherButton from "../../component/WeatherButton";
import DotLoader from "react-spinners/DotLoader";

const API_KEY = process.env.REACT_APP_API_KEY;

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [currentCity, setCurrentCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [background, setBackgroud] = useState();
  const cities = ["New York", "Tokyo", "Rome", "Paris"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setCurrentCity(data.name);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    if (!city) {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <Container>
      <div>
        {loading ? (
          <div className="main">
            <div className="loading">
              <DotLoader color="#ffff" loading={loading} size={100} />
            </div>

            <WeatherButton
              cities={cities}
              setCity={setCity}
              currentCity={currentCity}
            />
          </div>
        ) : (
          <div
            className="main"
            style={{
              backgroundImage: `${background}`,
            }}
          >
            <h4 className="title">Today's weather 🌎</h4>
            <WeatherBox
              weather={weather}
              setBackgroud={setBackgroud}
              background={background}
            />
            <WeatherButton
              cities={cities}
              setCity={setCity}
              currentCity={currentCity}
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Weather;
