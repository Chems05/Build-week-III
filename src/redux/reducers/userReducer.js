import { ADD_ALL_USERS_INFORMATIONS, ADD_SINGLE_USER_INFORMATIONS } from "../actions";

const initialState = {
  users: [],
  singleUser: null,
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
    default:
      return state;
  }
};

export default userReducer;
