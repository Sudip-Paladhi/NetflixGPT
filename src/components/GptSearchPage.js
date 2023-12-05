import React from 'react'
import GptSearchBar from './GptSearchBar';
import GtpMovieSuggestion from './GtpMovieSuggestion';
import { BG_URL } from '../utils/constantce';

const GptSearchPage = () => {
  return (
    <div>
    <div className="absolute -z-10">
    <img
      src={BG_URL}
      alt="Background Image"
    />
  </div>
    <GptSearchBar />
    <GtpMovieSuggestion />
    </div>
  )
}

export default GptSearchPage;