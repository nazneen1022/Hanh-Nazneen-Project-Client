import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectUser } from "../user/selectors";
import { appLoading, appDoneLoading } from "../appState/actions";

// fetch a story
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

// rate a story

export const RATE_STORY_SUCCESS = "RATE_STORY_SUCCESS";
export const rateAStorySuccess = (story) => ({
  type: RATE_STORY_SUCCESS,
  payload: story,
});
export const rateAStory = (storyId, ratingValue) => {
  return async (dispatch, getState) => {
    const { token, id } = selectUser(getState());
    // dispatch(appLoading());
    try {
      const response = await axios.post(
        `${apiUrl}/stories/story/${storyId}/rate`,
        { userId: id, ratingValue },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("story fetched after rate", response.data);
      dispatch(rateAStorySuccess(response.data));
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
