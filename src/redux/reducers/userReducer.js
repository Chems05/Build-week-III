import {
  ADD_SINGLE_USER_INFORMATIONS,
  ADD_ALL_USERS_INFORMATIONS,
  UPLOAD_PROFILE_IMAGE_REQUEST,
  UPLOAD_PROFILE_IMAGE_SUCCESS,
  UPLOAD_PROFILE_IMAGE_FAILURE,
  UPDATE_USER_INFO,
  ADD_EXPERIENCE,
  DELETE_EXPERIENCE,
  FETCH_EXPERIENCES
} from "../actions";

const initialState = {
  users: [],
  singleUser: null,
  experiencesArray: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SINGLE_USER_INFORMATIONS:
      return {
        ...state,
        singleUser: action.payload,
      };
    case ADD_ALL_USERS_INFORMATIONS:
      return {
        ...state,
        users: action.payload,
      };
    case UPLOAD_PROFILE_IMAGE_REQUEST:
      return { ...state, loading: true, error: null };
    case UPLOAD_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        singleUser: { ...state.singleUser, image: action.payload.url },
      };
    case UPLOAD_PROFILE_IMAGE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_USER_INFO:
      if (state.singleUser && state.singleUser._id === action.payload.userId) {
        return { ...state, singleUser: { ...state.singleUser, ...action.payload.newInfo } };
      }
      return state;
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
        experiencesArray: state.experiencesArray.filter((exp) => exp._id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
