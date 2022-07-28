import { combineReducers } from "redux";
import noticeReducer from "./noticeReducer";

export default combineReducers({
  notice: noticeReducer,
});
