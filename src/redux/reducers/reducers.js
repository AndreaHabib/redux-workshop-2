import { combineReducers } from "redux";
import { movieReducer } from "./moviesReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  user: userReducer,
  movies: movieReducer,
});
