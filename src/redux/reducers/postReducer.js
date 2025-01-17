import { ADD_ALL_POSTS_TO_ARRAY, ADD_NEW_POST, EDIT_POST } from "../actions/postsActions";

const initialState = {
  allPosts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_POSTS_TO_ARRAY:
      return {
        ...state,
        allPosts: action.payload,
      };
    case ADD_NEW_POST:
      return {
        ...state,
        allPosts: [...state.allPosts, action.payload],
      };
    case EDIT_POST:
      return {
        ...state,
        allPosts: state.allPosts.map((post) =>
          post._id === action.payload.postId ? { ...post, ...action.payload.text } : post
        ),
      };
    default:
      return state;
  }
};

export default postReducer;
