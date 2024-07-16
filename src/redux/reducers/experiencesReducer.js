import { ADD_EXPERIENCES_TO_ARRAY } from "../actions";

const initialState = {
  experiencesArray: [],
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPERIENCES_TO_ARRAY:
      return {
        ...state,
        experiencesArray: action.payload,
      };
    default:
      return state;
  }
};

export default experiencesReducer;
