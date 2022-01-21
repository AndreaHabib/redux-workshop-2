import {
  FETCH_MOVIES,
  START_FETCHING_MOVIES,
  END_FETCHING_MOVIES,
} from "./movieActions";

export const getMoviesThunk = () => async (dispatch) => {
  try {
    dispatch({ type: START_FETCHING_MOVIES });
    const movies = await fetch("https://api.sampleapis.com/movies/animation");
    const data = await movies.json();
    dispatch({ type: FETCH_MOVIES, payload: data });
    dispatch({ type: END_FETCHING_MOVIES });
  } catch (error) {
    console.log(error);
  }
};
