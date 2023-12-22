import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooke/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";
import usePopularMovies from "../hooke/usePopularMovies";
import useTopRatedMovies from "../hooke/useTopRatedMovies";
import GptSearch from "./GptSearchPage";
import { useSelector } from "react-redux";
import useUpcoming from "../hooke/useUpcoming";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcoming();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SeconderyContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
