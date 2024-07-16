import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import experiencesReducer from "../reducers/experiencesReducer";

const rootReducer = combineReducers({
  users: userReducer,
  experiences: experiencesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
