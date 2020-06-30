import myAxios from "axios";
import { apiUrl } from "../../config/constants";
export const createMyStory = (title, story, imageUrl, rating) => async (
  dispatch,
  getState
) => {
  const { token } = getState().user;
  try {
    const response = await myAxios.post(
      `${apiUrl}/story`,
      {
        title,
        content: story,
        imageUrl,
        rating,
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
