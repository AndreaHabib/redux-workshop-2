import {
  FETCH_USER,
  START_FETCHING_USER,
  END_FETCHING_USER,
} from "./userActions";

export const getUserThunk = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_FETCHING_USER });
    const user = await fetch(`http://localhost:4000/user/${id}`);
    const data = await user.json();
    dispatch({ type: FETCH_USER, payload: data });
    dispatch({ type: END_FETCHING_USER });
  } catch (error) {
    console.log(error);
  }
};

export const createUserThunk = () => async (dispatch) => {
  try {
    dispatch({ type: START_FETCHING_USER });
    const response = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "John Doe",
        email: "email.email@domain.com",
        password: "Password12!",
      }),
    });
    const data = await response.json();
    console.log(data);
    dispatch({ type: END_FETCHING_USER });
  } catch (e) {
    console.log(e);
  }
};
