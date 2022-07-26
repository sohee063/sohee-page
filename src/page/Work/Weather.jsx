import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import WeatherBox from "../../component/WeatherBox";
import WeatherButton from "../../component/WeatherButton";
import DotLoader from "react-spinners/DotLoader";
import { useDispatch, useSelector } from "react-redux";
import { weatherAction } from "../../redux/actions/weatherAction";

const Weather = () => {
  const [city, setCity] = useState("");
  const [background, setBackgroud] = useState();
  const cities = ["New York", "Tokyo", "Rome", "Paris"];
  const { loading, currentOrSelect, setRenderCity } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  const getCurrentCity = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      return dispatch(weatherAction.getCurrentCityWeather(lat, lon));
    });
  };
  const getSelectCity = (city) => {
    return dispatch(weatherAction.getSelectedCityWeather(city));
  };
  useEffect(() => {
    if (currentOrSelect) {
      getCurrentCity();
    } else {
      getSelectCity(city);
    }
  }, [city]);

  if (loading) {
    return (
      <Container>
        <div className="main">
          <div className="loading">
            <DotLoader color="#ffff" loading={loading} size={100} />
          </div>
          <WeatherButton cities={cities} />
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <div
          className="main"
          style={{
            backgroundImage: `${background}`,
          }}
        >
          <h4 className="title">Today's weather 🌎</h4>
          <WeatherBox
            setBackgroud={setBackgroud}
            renderWeather={setRenderCity}
          />
          <WeatherButton cities={cities} />
        </div>
      </Container>
    );
  }
};
export default Weather;
