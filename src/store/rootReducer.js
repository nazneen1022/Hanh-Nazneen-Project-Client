import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";

import stories from "./stories/reducer";
import storyline from "./storyline/reducer";
import story from "./story/reducer";
export default combineReducers({
  appState,
  user,
  storyline,
  stories,
  story,
});
