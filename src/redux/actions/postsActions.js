export const ADD_ALL_POSTS_TO_ARRAY = "ADD_ALL_POSTS_TO_ARRAY";

//fetch che recupera i dati di tutti i post esistenti
export const getAllPosts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZDlhMjE5NmQ3YjAwMTVkNmI1MjgiLCJpYXQiOjE3MjEwMzEwNzQsImV4cCI6MTcyMjI0MDY3NH0.mMwvBmTiZudIbjpyQMoPDUFqRKemJEWS1jVMsU6gSOs",
        },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(addAllPostsToArrayAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addAllPostsToArrayAction = (posts) => {
  return {
    type: ADD_ALL_POSTS_TO_ARRAY,
    payload: posts,
  };
};
