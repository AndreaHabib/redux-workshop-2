import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "./redux/actions/moviesThunk";

function App() {
  const [movies, isFetching] = useSelector((state) => [
    state.movies.movies,
    state.movies.isFetching,
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        {!isFetching ? (
          <p>
            {movies.map((movie, index) => {
              return <p key={index}>{movie.title}</p>;
            })}
          </p>
        ) : (
          <h1>Loading...</h1>
        )}
      </header>
    </div>
  );
}

export default App;
