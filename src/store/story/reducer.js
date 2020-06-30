import { FETCH_A_STORY_SUCCESS } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_A_STORY_SUCCESS:
      if (!state) {
        return action.payload;
      } else {
        return { ...state, ...action.payload };
      }
    default:
      return state;
  }
};
