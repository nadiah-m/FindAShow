import React, { useEffect } from "react";
import { useState } from "react";
import TrendingMoviesList from "./components/TrendingMoviesList";
import TrendingTvList from "./components/TrendingTvList";

function Home(props) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);

  const getTrendingMovies = () => {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=854888e6719c0f864d6db29cdfe47090`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const n = data.results;
        setTrendingMovies(n);
      });
  };

  const getTrendingTv = () => {
    const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=854888e6719c0f864d6db29cdfe47090`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const n = data.results;
        setTrendingTv(n);
      });
  };

  useEffect(() => {
    getTrendingMovies();
    getTrendingTv();
  }, []);

  return (
    <>
      <div>
        <TrendingMoviesList
          trendingMovies={trendingMovies}
          handleAddFavourites={props.handleAddFavourites}
        />
        <TrendingTvList
          trendingTv={trendingTv}
          handleAddFavourites={props.handleAddFavourites}
        />
      </div>
    </>
  );
}

export default Home;
