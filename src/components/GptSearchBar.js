import React from "react";
import { language } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languagyKey = useSelector((store) => store.config.language);
  return (
    <div className="pt-32 flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          className="px-4 m-4 col-span-9 rounded-lg"
          type="text"
          placeholder={language[languagyKey].gptSearchPlacrholder}
        />
        <button className="py-2 px-4 m-4 bg-red-800 rounded-lg text-white col-span-3">
          {language[languagyKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
