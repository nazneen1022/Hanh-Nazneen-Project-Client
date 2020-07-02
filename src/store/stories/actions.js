import { apiUrl, ADD_STORY } from "../../config/constants";
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

export const addStory = (story) => {
  return { type: ADD_STORY, payload: story };
};

export const createMyStory = (
  storyLineId,
  title,
  story,
  imageUrl,
  rating
) => async (dispatch, getState) => {
  const { token, id } = getState().user;

  try {
    const response = await axios.post(
      `${apiUrl}/stories/${storyLineId}`,
      {
        title,
        content: story,
        imageUrl,
        rating,
        userId: id,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(addStory(response.data));
    dispatch(showMessageWithTimeout("success", true, "Story created"));
    dispatch(appDoneLoading());
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message);
      dispatch(setMessage("danger", true, error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(setMessage("danger", true, error.message));
    }
    dispatch(appDoneLoading());
  }
};
