import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import noticeReducer from "./noticeReducer";

export default combineReducers({
  weather: weatherReducer,
  notice: noticeReducer,
});
