import React from "react";

function Generate(props) {
  const API_KEY = "854888e6719c0f864d6db29cdfe47090";

  

  //   const TV =
  //     "https://api.themoviedb.org/3/discover/tv?api_key=854888e6719c0f864d6db29cdfe47090&language=en-US&sort_by=popularity.desc&with_watch_monetization_types=flatrate&with_status=0&with_type=0";
  //   const movies =
  //     "https://api.themoviedb.org/3/discover/movie?api_key=854888e6719c0f864d6db29cdfe47090&language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate";

  const generateURL = `https://api.themoviedb.org/3/discover/${type}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genreValue}&with_runtime.lte=${time}&with_watch_monetization_types=flatrate`;



  return (
    <>
    <p>Movie title</p>
    </>
  )

}

export default Generate;
