import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constantce";
import { useDispatch, useSelector } from "react-redux";
import { addUpcoming } from "../utils/moviesSlice";
const useUpcoming = () => {
    const dispatch = useDispatch();
    const upcoming = useSelector(
      (store) => store.movies.upcoming
    );
  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcoming(json.results));
  };

  useEffect(() => {
    !upcoming && getUpcoming();
  }, []);
};

export default useUpcoming;
