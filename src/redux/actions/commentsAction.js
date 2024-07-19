export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const SET_COMMENTS = "SET_COMMENTS";

const tokens = {
  giuseppe: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk5MWI3Mjg3ZmZjYjAwMTU3NGNiNzkiLCJpYXQiOjE3MjEzMTAwNjYsImV4cCI6MTcyMjUxOTY2Nn0.aHoj16XGEUnXPdfaYmFylo4R04WSoEiRgVM-GB0kMdU",
  gianluca: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZDlhMjE5NmQ3YjAwMTVkNmI1MjgiLCJpYXQiOjE3MjEwMzEwNzQsImV4cCI6MTcyMjI0MDY3NH0.mMwvBmTiZudIbjpyQMoPDUFqRKemJEWS1jVMsU6gSOs",
  chems: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk5MWNjODg3ZmZjYjAwMTU3NGNiN2EiLCJpYXQiOjE3MjEzMTA0MDgsImV4cCI6MTcyMjUyMDAwOH0.rqvx0RdnErmfOGtOMVp3ckczUKXtGBuZyYEsa8Qdi90"
};

// Fetch comments for a specific post
export const fetchComments = (postId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${postId}`, {
        headers: {
          Authorization: tokens.giuseppe,
        },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(setCommentsAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addComment = (comment) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: tokens.giuseppe,
        },
        body: JSON.stringify(comment),
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(addCommentAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editComment = (commentId, updatedComment) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: tokens.giuseppe,
        },
        body: JSON.stringify(updatedComment),
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(editCommentAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteComment = (commentId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization: tokens.giuseppe,
        },
      });
      if (response.ok) {
        dispatch(deleteCommentAction(commentId));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setCommentsAction = (comments) => {
  return {
    type: SET_COMMENTS,
    payload: comments,
  };
};

export const addCommentAction = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};

export const editCommentAction = (comment) => {
  return {
    type: EDIT_COMMENT,
    payload: comment,
  };
};

export const deleteCommentAction = (commentId) => {
  return {
    type: DELETE_COMMENT,
    payload: commentId,
  };
};
