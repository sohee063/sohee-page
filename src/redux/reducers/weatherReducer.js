let initialState = {
  currentWeather: {},
  selectedCityWeather: {},
  loading: true,
  currentOrSelect: true,
  setRenderCity: {},
};

function weatherReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_SELECTED_CITY":
      return {
        ...state,
        selectedCityWeather: payload.selectedCity,
        loading: false,
        currentOrSelect: false,
        setRenderCity: payload.selectedCity,
      };
    case "GET_CURRENT_CITY":
      return {
        ...state,
        currentWeather: payload.currentCity,
        loading: false,
        currentOrSelect: false,
        setRenderCity: payload.currentCity,
      };
    case "GET_WEATHER_REQUEST":
      return { ...state, loading: true };
    case "GET_WEATHER_FAIL":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}

export default weatherReducer;
