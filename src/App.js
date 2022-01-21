import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesThunk } from "./redux/actions/moviesThunk";
import { getUserThunk, createUserThunk } from "./redux/actions/userThunk";

function App() {
  const [id, setId] = useState(0);
  const [movies, isFetchingMovies] = useSelector((state) => [
    state.movies.movies,
    state.movies.isFetchingMovies,
  ]);

  const [user, isFetchingUser] = useSelector((state) => [
    state.user.user,
    state.user.isFetchingUser,
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesThunk());
  }, [dispatch]);

  const handleUserId = (e) => {
    setId(e.target.value);
  };

  const handleDispatch = () => {
    dispatch(getUserThunk(id));
  };

  const createDispatch = () => {
    dispatch(createUserThunk());
  };

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={handleUserId} placeholder="id" />
        <button onClick={handleDispatch}>Search User</button>
        <button onClick={createDispatch}>Create User</button>
        {isFetchingUser && user === {} ? (
          <div>Fetching User...</div>
        ) : (
          <div>
            <div>{user.username}</div>
            <div>{user.email}</div>
          </div>
        )}
        <h1>Movies</h1>
        {isFetchingMovies ? (
          <p>Loading...</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
            </div>
          ))
        )}
      </header>
    </div>
  );
}

export default App;
