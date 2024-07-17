import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import experiencesReducer from "../reducers/experiencesReducer";
import imageReducer from "../reducers/imageReducer";

const rootReducer = combineReducers({
  users: userReducer,
  experiences: experiencesReducer,
  image: imageReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
