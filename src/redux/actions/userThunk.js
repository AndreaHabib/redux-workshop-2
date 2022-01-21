import {
  FETCH_USER,
  START_FETCHING_USER,
  END_FETCHING_USER,
} from "./usersActions";

export const getUser = (userId) => async (dispatch) => {
  try {
    dispatch({ type: START_FETCHING_USER });
    const user = await fetch(`http://localhost:4000/user/${userId}`);
    const data = await user.json();
    console.log(data);
    dispatch({ type: FETCH_USER, payload: data });
    dispatch({ type: END_FETCHING_USER });
  } catch (error) {
    console.log(error);
  }
};
