export const ADD_TEXT_TO_SEARCH_QUERY = "ADD_TEXT_TO_SEARCH_QUERY";

export const updateSearchQueryAction = (text) => {
  return {
    type: ADD_TEXT_TO_SEARCH_QUERY,
    payload: text,
  };
};
