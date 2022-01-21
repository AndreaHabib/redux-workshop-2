import {
  FETCH_USER,
  START_FETCHING_USER,
  END_FETCHING_USER,
} from "../actions/usersActions";

const initialState = {
  user: {},
  isUserFetching: true,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_USER:
      return {
        ...state,
        isUserFetching: true,
      };
    case END_FETCHING_USER:
      return {
        ...state,
        isUserFetching: false,
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
