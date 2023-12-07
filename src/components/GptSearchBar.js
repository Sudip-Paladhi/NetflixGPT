import React, { useRef } from "react";
import { language } from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const languagyKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const getResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!getResult.choices) {
      //error
    }
    
    const gptMovies =getResult.choices?.[0]?.message?.content.split(",");
    console.log(gptMovies);
  };
  return (
    <div className="pt-32 flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="px-4 m-4 col-span-9 rounded-lg"
          type="text"
          placeholder={language[languagyKey].gptSearchPlacrholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-800 rounded-lg text-white col-span-3"
          onClick={handleGptSearchClick}
        >
          {language[languagyKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
