import { FETCH_STORIES_SUCCESS } from "./actions";
const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORIES_SUCCESS:
      if (!state) {
        return action.payload;
      } else {
        return [...state, action.payload];
      }
    default:
      return state;
  }
};
