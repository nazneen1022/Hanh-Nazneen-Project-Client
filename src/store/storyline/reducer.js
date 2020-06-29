import { FETCH_STORY_LINES } from "../../config/constants";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORY_LINES: {
      if (!state) {
        return action.payload;
      } else {
        return [...state, action.payload];
      }
    }
    default:
      return state;
  }
};
export default reducer;
