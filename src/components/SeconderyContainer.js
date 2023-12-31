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
        <MovieList title={"upcoming"} movies={movies.upcoming} />
      </div>
    </div>
  );
};

export default SeconderyContainer;
