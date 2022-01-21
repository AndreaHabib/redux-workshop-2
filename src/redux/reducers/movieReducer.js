import {
  FETCH_MOVIES,
  START_FETCHING_MOVIES,
  END_FETCHING_MOVIES,
} from "../actions/moviesActions";

const initialState = {
  movies: [],
  isFetching: true,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_MOVIES:
      return {
        ...state,
        isFetching: true,
      };
    case END_FETCHING_MOVIES:
      return {
        ...state,
        isFetching: false,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
};
