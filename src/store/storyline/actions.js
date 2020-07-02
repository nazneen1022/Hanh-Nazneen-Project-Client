import myAxios from "axios";
import { appDoneLoading, showMessageWithTimeout } from "../appState/actions";

import { apiUrl } from "../../config/constants";
import { FETCH_STORY_LINES, ADD_STORY_LINE } from "../../config/constants";

export const storyLines = (data) => {
  return { type: FETCH_STORY_LINES, payload: data };
};

export const addNewStoryline = (storyline) => {
  return { type: ADD_STORY_LINE, payload: storyline };
};

export const createNewStoryline = (newStoryline) => async (
  dispatch,
  getState
) => {
  const { token } = getState().user;
  try {
    const response = await myAxios.post(
      `${apiUrl}/storylines`,
      {
        content: newStoryline,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(addNewStoryline(response.data));
    dispatch(showMessageWithTimeout("success", true, "New storyline created"));
    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error);
  }
};

export const fetchStoryLines = () => async (dispatch, getState) => {
  try {
    const response = await myAxios.get(`${apiUrl}/storylines`);
    //console.log("response.data:", response.data);
    dispatch(storyLines(response.data));
  } catch (error) {
    console.log(error);
  }
};
