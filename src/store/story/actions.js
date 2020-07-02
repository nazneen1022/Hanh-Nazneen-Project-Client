import { apiUrl, ADD_STORY } from "../../config/constants";
import axios from "axios";
import { selectUser } from "../user/selectors";

import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

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

export const addStory = (story) => {
  return { type: ADD_STORY, payload: story };
};

export const createMyStory = (storyLineId, title, story, imageUrl) => async (
  dispatch,
  getState
) => {
  const { token, id } = getState().user;

  try {
    const response = await axios.post(
      `${apiUrl}/stories/${storyLineId}`,
      {
        title,
        content: story,
        imageUrl,
        rating: 0,
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
