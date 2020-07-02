import { FETCH_STORIES_SUCCESS } from "./actions";
const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORIES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
