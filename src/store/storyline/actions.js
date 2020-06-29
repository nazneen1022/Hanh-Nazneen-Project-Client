import myAxios from "axios";

import { apiUrl } from "../../config/constants";
import { FETCH_STORY_LINES } from "../../config/constants";

export const storyLines = (data) => {
  return { type: FETCH_STORY_LINES, payload: data };
};

export const fetchStoryLines = () => async (dispatch, getState) => {
  try {
    const response = await myAxios.get(`${apiUrl}/storylines`);
    console.log("response.data:", response.data);
    dispatch(storyLines(response.data));
  } catch (error) {
    console.log(error);
  }
};
