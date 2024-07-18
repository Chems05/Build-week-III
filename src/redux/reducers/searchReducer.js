import { ADD_TEXT_TO_SEARCH_QUERY } from "../actions/searchActions";

const initialState = {
  searchQuery: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT_TO_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
