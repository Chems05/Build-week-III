export const ADD_ALL_POSTS_TO_ARRAY = "ADD_ALL_POSTS_TO_ARRAY";
export const ADD_NEW_POST = "ADD_NEW_POST";
export const EDIT_POST = "EDIT_POST";
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

//fetch con metodo POST per pubblicare un post
export const addNewPost = (text) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZDlhMjE5NmQ3YjAwMTVkNmI1MjgiLCJpYXQiOjE3MjEwMzEwNzQsImV4cCI6MTcyMjI0MDY3NH0.mMwvBmTiZudIbjpyQMoPDUFqRKemJEWS1jVMsU6gSOs",
        },
        body: JSON.stringify(text),
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(addNewPostAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//fetch con metodo PUT per modificare un post

export const editPost = (postId, updatedText) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + postId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZDlhMjE5NmQ3YjAwMTVkNmI1MjgiLCJpYXQiOjE3MjEwMzEwNzQsImV4cCI6MTcyMjI0MDY3NH0.mMwvBmTiZudIbjpyQMoPDUFqRKemJEWS1jVMsU6gSOs",
        },
        body: JSON.stringify(updatedText),
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: EDIT_POST, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletePost = (postId) => {
  return async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + postId, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZDlhMjE5NmQ3YjAwMTVkNmI1MjgiLCJpYXQiOjE3MjEwMzEwNzQsImV4cCI6MTcyMjI0MDY3NH0.mMwvBmTiZudIbjpyQMoPDUFqRKemJEWS1jVMsU6gSOs",
        },
      });
      if (response.ok) {
        return response.json();
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

export const addNewPostAction = (text) => {
  return {
    type: ADD_NEW_POST,
    payload: text,
  };
};

export const editPostAction = (text) => {
  return {
    type: EDIT_POST,
    payload: text,
  };
};
