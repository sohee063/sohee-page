let initialState = {
  currentWeather: {},
  selectedCityWeather: {},
  loading: true,
};

function weatherReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_SELECTED_CITY":
      return {
        ...state,
        currentWeather: payload.selectedCity,
        loading: false,
      };
    case "GET_CURRENT_CITY":
      return {
        ...state,
        currentWeather: payload.currentCity,
        loading: false,
      };
    case "GET_WEATHER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_WEATHER_FAIL":
      return {
        ...state,
        loading: true,
      };
    default:
      return { ...state };
  }
}

export default weatherReducer;
