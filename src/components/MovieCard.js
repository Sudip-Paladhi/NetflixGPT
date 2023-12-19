import React from "react";
import { IMG_CDN_URL } from "../utils/constantce";

const MovieCard = ({ posterpath }) => {
  if(!posterpath) return null;
  return (
    <div className="w-32 pr-4">
      <img src={IMG_CDN_URL + posterpath} alt="movie card" />
    </div>
  );
};

export default MovieCard;
