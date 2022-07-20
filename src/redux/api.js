import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  headers: { "Content-type": "application/json" },
});

api.interceptors.request.use(
  function (config) {
    console.log("req start", config);
    return config;
  },
  function (err) {
    console.log("req error", err);
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  function (response) {
    console.log("response", response);
    return response;
  },
  function (err) {
    console.log("response err", err);
    return Promise.reject(err);
  }
);

export default api;
