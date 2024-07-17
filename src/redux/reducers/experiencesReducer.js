import { ADD_EXPERIENCE, DELETE_EXPERIENCE, FETCH_EXPERIENCES } from "../actions";


const initialState = {
  experiencesArray: [
    {
      id: 1,
      role: "Full Stack Web Developer",
      company: "FizzBuzz",
      startDate: "2022-06-16",
      endDate: "2023-06-16",
      description: "Implementing new features",
      area: "Milan",
      logo: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      role: "Junior Developer",
      company: "Innovatech Ltd.",
      startDate: "2018-03-01",
      endDate: "2020-12-31",
      description: "Developed various web applications",
      area: "New York, USA",
      logo: "https://via.placeholder.com/50",
    },
  ],
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
        experiencesArray: state.experiencesArray.filter(exp => exp.id !== action.payload),
      };
    default:
      return state;
  }
};

export default experiencesReducer;
