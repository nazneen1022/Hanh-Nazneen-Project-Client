import { FETCH_STORIES_SUCCESS } from "./actions";
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORIES_SUCCESS:
      return { ...state, stories: [...state.action.payload] };

    default:
      return state;
  }
};
