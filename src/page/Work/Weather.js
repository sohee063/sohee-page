import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import WeatherBox from "../../component/WeatherBox";
import WeatherButton from "../../component/WeatherButton";
import DotLoader from "react-spinners/DotLoader";
import { useDispatch, useSelector } from "react-redux";
import { weatherAction } from "../../redux/actions/weatherAction";

const Weather = () => {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [background, setBackgroud] = useState();
  const cities = ["New York", "Tokyo", "Rome", "Paris"];

  const dispatch = useDispatch();
  const currentWeatherData = useSelector(
    (state) => state.weather.currentWeather
  );
  console.log("나다", currentWeatherData.name);

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
              currentCity={currentWeatherData.name}
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
              weather={currentWeatherData}
              setBackgroud={setBackgroud}
              city={city}
            />
            <WeatherButton
              cities={cities}
              setCity={setCity}
              currentCity={currentWeatherData?.name}
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Weather;
