import {
  FETCH_MOVIES,
  START_FETCHING_MOVIES,
  END_FETCHING_MOVIES,
} from "../actions/movieActions";

const initialState = {
  movies: [],
  isFetchingMovies: true,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case START_FETCHING_MOVIES:
      return {
        ...state,
        isFetchingMovies: true,
      };
    case END_FETCHING_MOVIES:
      return {
        ...state,
        isFetchingMovies: false,
      };
    default:
      return state;
  }
};
