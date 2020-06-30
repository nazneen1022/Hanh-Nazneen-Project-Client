import { FETCH_STORY_LINES, ADD_STORY_LINE } from "../../config/constants";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORY_LINES: {
      return action.payload;
    }
    case ADD_STORY_LINE: {
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
