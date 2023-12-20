import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SeconderyContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="mt-0 md:-mt-72 pl-4 md:pl-12 relative z-20">
        <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Now plg"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Now ping"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Nowlaying"} movies={movies.nowPlayingMovies} />
        <MovieList title={"No playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"ow playing"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SeconderyContainer;
