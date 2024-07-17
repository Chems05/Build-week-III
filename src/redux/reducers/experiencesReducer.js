import { ADD_EXPERIENCE, DELETE_EXPERIENCE, FETCH_EXPERIENCES } from "../actions";

const initialState = {
  experiencesArray: [],
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES:
      return {
        ...state,
        experiencesArray: action.payload,
      };
    case ADD_EXPERIENCE:
      return {
        ...state,
        experiencesArray: [...state.experiencesArray, action.payload],
      };
    case DELETE_EXPERIENCE:
      return {
        ...state,
        experiencesArray: state.experiencesArray.filter((exp) => exp.id !== action.payload),
      };
    default:
      return state;
  }
};
export default experiencesReducer