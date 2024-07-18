export const ADD_ALL_POSTS_TO_ARRAY = "ADD_ALL_POSTS_TO_ARRAY";
export const ADD_NEW_POST = "ADD_NEW_POST";
export const EDIT_POST = "EDIT_POST";
//fetch che recupera i dati di tutti i post esistenti
const tokens = {giuseppe:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk5MWI3Mjg3ZmZjYjAwMTU3NGNiNzkiLCJpYXQiOjE3MjEzMTAwNjYsImV4cCI6MTcyMjUxOTY2Nn0.aHoj16XGEUnXPdfaYmFylo4R04WSoEiRgVM-GB0kMdU",
  gianluca:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZDlhMjE5NmQ3YjAwMTVkNmI1MjgiLCJpYXQiOjE3MjEwMzEwNzQsImV4cCI6MTcyMjI0MDY3NH0.mMwvBmTiZudIbjpyQMoPDUFqRKemJEWS1jVMsU6gSOs',
  chems:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk5MWNjODg3ZmZjYjAwMTU3NGNiN2EiLCJpYXQiOjE3MjEzMTA0MDgsImV4cCI6MTcyMjUyMDAwOH0.rqvx0RdnErmfOGtOMVp3ckczUKXtGBuZyYEsa8Qdi90'
}
export const getAllPosts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          Authorization:
            tokens.giuseppe,
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
            tokens.giuseppe,
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
            tokens.giuseppe,
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
            tokens.giuseppe,
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
