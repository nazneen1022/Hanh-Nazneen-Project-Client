import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import storyline from "./storyline/reducer";

export default combineReducers({
  appState,
  user,
  storyline,
});