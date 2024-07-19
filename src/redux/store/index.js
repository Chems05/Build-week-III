import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import experiencesReducer from "../reducers/experiencesReducer";
import imageReducer from "../reducers/imageReducer";
import postReducer from "../reducers/postReducer";
import searchReducer from "../reducers/searchReducer";
import commentsReducer from "../reducers/commentsReducer";


const rootReducer = combineReducers({
  users: userReducer,
  experiences: experiencesReducer,
  image: imageReducer,
  posts: postReducer,
  search: searchReducer,
  comments: commentsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
