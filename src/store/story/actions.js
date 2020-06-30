import myAxios from "axios";
import { apiUrl } from "../../config/constants";
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
    console.log("response:", response);
  } catch (error) {
    console.log(error);
  }
};
