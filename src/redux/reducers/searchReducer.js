import { ADD_JOBS_SEARCHED_TO_ARRAY, ADD_TEXT_TO_SEARCH_QUERY } from "../actions/searchActions";

const initialState = {
  searchQuery: "",
  jobsSearchedArray: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT_TO_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case ADD_JOBS_SEARCHED_TO_ARRAY:
      return {
        ...state,
        jobsSearchedArray: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
