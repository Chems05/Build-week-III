import { UPLOAD_PROFILE_IMAGE_REQUEST, UPLOAD_PROFILE_IMAGE_SUCCESS, UPLOAD_PROFILE_IMAGE_FAILURE, UPDATE_USER_INFO } from "../actions";

const initialState = {
  singleUser: null,
  loading: false,
  error: null,
  imageUrl: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_PROFILE_IMAGE_REQUEST:
      return { ...state, loading: true, error: null };
    case UPLOAD_PROFILE_IMAGE_SUCCESS:
      return { ...state, loading: false, imageUrl: action.payload.imageUrl };
    case UPLOAD_PROFILE_IMAGE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_USER_INFO:
      if (state.singleUser && state.singleUser._id === action.payload.userId) {
        return { ...state, singleUser: { ...state.singleUser, image: action.payload.newInfo.image } };
      }
      return state;
    default:
      return state;
  }
};

export default userReducer;
