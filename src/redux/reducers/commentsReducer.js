import { ADD_COMMENT, DELETE_COMMENT, EDIT_COMMENT, SET_COMMENTS } from "../actions/commentsAction";

const initialState = {
    comments: [],
  };
  
  const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_COMMENTS:
        return {
          ...state,
          comments: action.payload,
        };
      case ADD_COMMENT:
        return {
          ...state,
          comments: [...state.comments, action.payload],
        };
      case EDIT_COMMENT:
        return {
          ...state,
          comments: state.comments.map((comment) =>
            comment._id === action.payload._id ? action.payload : comment
          ),
        };
      case DELETE_COMMENT:
        return {
          ...state,
          comments: state.comments.filter((comment) => comment._id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default commentsReducer;
  