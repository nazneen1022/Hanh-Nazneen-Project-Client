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
// fetch comments
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const fetchCommentsSuccess = (comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments,
});

export const fetchCommentsOfAStory = (storyId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(
        `${apiUrl}/stories/story/${storyId}/comments`
      );
      // console.log("comments fetched", response.data.comments);
      dispatch(fetchCommentsSuccess(response.data.comments));
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

// add new comment
export const ADD_NEW_COMMENT_SUCCESS = "ADD_NEW_COMMENT_SUCCESS";
export const addCommentSuccess = (comments) => ({
  type: ADD_NEW_COMMENT_SUCCESS,
  payload: comments,
});

export const addComment = (storyId, content) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());

    try {
      const response = await axios.post(
        `${apiUrl}/stories/story/${storyId}/comments`,
        { content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("comments fetched after adding", response.data.comments);
      dispatch(addCommentSuccess(response.data.comments));
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
