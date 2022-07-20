import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getSelectedCityWeather(city) {
  console.log(city);

  return async (dispatch) => {
    try {
      dispatch({ type: "GET_WEATHER_REQUEST" });
      const selectedCityApi = api.get(
        `/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      let selectedCity = await selectedCityApi;
      dispatch({
        type: "GET_SELECTED_CITY",
        payload: {
          selectedCity: selectedCity.data,
        },
      });
    } catch (err) {
      dispatch({ type: "GET_WEATHER_FAIL" });
    }
  };
}

function getCurrentCityWeather(lat, lon) {
  console.log("액션", lat, lon);

  return async (dispatch) => {
    try {
      dispatch({ type: "GET_WEATHER_REQUEST" });
      const currentCityApi = api.get(
        `/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      let currentCity = await currentCityApi;
      console.log("current", currentCity);
      dispatch({
        type: "GET_CURRENT_CITY",
        payload: {
          currentCity: currentCity.data,
        },
      });
    } catch (err) {
      dispatch({ type: "GET_WEATHER_FAIL" });
    }
  };
}

export const weatherAction = { getSelectedCityWeather, getCurrentCityWeather };
