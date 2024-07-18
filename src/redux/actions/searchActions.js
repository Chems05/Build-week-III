export const ADD_TEXT_TO_SEARCH_QUERY = "ADD_TEXT_TO_SEARCH_QUERY";
export const ADD_JOBS_SEARCHED_TO_ARRAY = "ADD_JOBS_SEARCHED_TO_ARRAY";

export const fetchJobQuery = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query);
      if (response.ok) {
        const data = await response.json();
        dispatch(addJobsSearchedToArray(data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateSearchQueryAction = (text) => {
  return {
    type: ADD_TEXT_TO_SEARCH_QUERY,
    payload: text,
  };
};

export const addJobsSearchedToArray = (jobs) => {
  return {
    type: ADD_JOBS_SEARCHED_TO_ARRAY,
    payload: jobs,
  };
};
