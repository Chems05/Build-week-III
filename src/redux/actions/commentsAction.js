export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const SET_COMMENTS = "SET_COMMENTS";



// Fetch comments for a specific post
export const fetchComments = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjlhMTFlYjhmMDYyYTAwMTVlZTc1YjEiLCJpYXQiOjE3MjEzNzMxNjMsImV4cCI6MTcyMjU4Mjc2M30.fTgWPhWTSCXxvKLeWsr33vT7G-E6NwDRrrB92IGOdCk",
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
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjlhMTFlYjhmMDYyYTAwMTVlZTc1YjEiLCJpYXQiOjE3MjEzNzMxNjMsImV4cCI6MTcyMjU4Mjc2M30.fTgWPhWTSCXxvKLeWsr33vT7G-E6NwDRrrB92IGOdCk",
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
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjlhMTFlYjhmMDYyYTAwMTVlZTc1YjEiLCJpYXQiOjE3MjEzNzMxNjMsImV4cCI6MTcyMjU4Mjc2M30.fTgWPhWTSCXxvKLeWsr33vT7G-E6NwDRrrB92IGOdCk",
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
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjlhMTFlYjhmMDYyYTAwMTVlZTc1YjEiLCJpYXQiOjE3MjEzNzMxNjMsImV4cCI6MTcyMjU4Mjc2M30.fTgWPhWTSCXxvKLeWsr33vT7G-E6NwDRrrB92IGOdCk",
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
