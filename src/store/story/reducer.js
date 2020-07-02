import { FETCH_A_STORY_SUCCESS, RATE_STORY_SUCCESS } from "./actions";
import { ADD_STORY } from "../../config/constants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_A_STORY_SUCCESS:
      if (!state) {
        return action.payload;
      } else {
        return { ...state, ...action.payload };
      }
    case RATE_STORY_SUCCESS:
      return { ...state, ...action.payload };

    case ADD_STORY: {
      return action.payload;
    }

    default:
      return state;
  }
};
