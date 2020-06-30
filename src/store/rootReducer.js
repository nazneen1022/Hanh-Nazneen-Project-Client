import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import stories from "./stories/reducer";
export default combineReducers({
  appState,
  user,
  stories,
});
