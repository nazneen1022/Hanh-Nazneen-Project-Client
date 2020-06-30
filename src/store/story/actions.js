import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";

export const FETCH_A_STORY_SUCCESS = "FETCH_A_STORY_SUCCESS";
export const fetchAStorySuccess = (story) => ({
  type: FETCH_A_STORY_SUCCESS,
  payload: story,
});
export const fetchAStory = (storyId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/stories/story/${storyId}`);
      console.log("story etched", response.data);
      dispatch(fetchAStorySuccess(response.data));
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
