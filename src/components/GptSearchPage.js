import React from "react";
import GptSearchBar from "./GptSearchBar";
import GtpMovieSuggestion from "./GtpMovieSuggestion";
import { BG_URL } from "../utils/constantce";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="object-cover h-screen md:h-full"
          src={BG_URL}
          alt="Background Image"
        />
      </div>
      <div>
        <GptSearchBar />
        <GtpMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearchPage;
