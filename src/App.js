import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "./redux/actions/moviesThunk";
import { getUser } from "./redux/actions/userThunk";

function App() {
  const [id, setId] = useState(0);
  const [user, isUserFetching] = useSelector((state) => [
    state.user.user,
    state.user.isUserFetching,
  ]);
  const [movies, isFetching] = useSelector((state) => [
    state.movies.movies,
    state.movies.isFetching,
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const handleId = (e) => {
    setId(e.target.value);
  };

  const getUserId = () => {
    dispatch(getUser(id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <input placeholder="id" onChange={handleId} />
        <button onClick={getUserId}>Get User</button>
        {isUserFetching ? <p>Fetching user...</p> : <p>{user.username}</p>}
        {!isFetching ? (
          <div>
            {movies.map((movie, index) => {
              return <p key={index}>{movie.title}</p>;
            })}
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </header>
    </div>
  );
}

export default App;
