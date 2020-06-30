import myAxios from "axios";
import { apiUrl, ADD_STORY } from "../../config/constants";

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
    const response = await myAxios.post(
      `${apiUrl}/story`,
      {
        title,
        content: story,
        imageUrl,
        rating,
        userId: id,
        storyLineId,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(addStory(response.data));
  } catch (error) {
    console.log(error);
  }
};
