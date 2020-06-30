import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const FETCH_STORIES_SUCCESS = "FETCH_STORIES_SUCCESS";
export const fetchStoriesSuccess = (stories) => ({
  type: FETCH_STORIES_SUCCESS,
  payload: stories,
});
export const fetchAllStories = (storyLineId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/stories/${storyLineId}`);
      console.log("stories fetched", response.data);
      dispatch(fetchStoriesSuccess(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }

      dispatch(appDoneLoading());
    }
  };
};
