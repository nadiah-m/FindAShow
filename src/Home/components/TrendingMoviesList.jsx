import React from "react";

const TrendingMoviesList = (props) => {
  const baseImgURL = "https://image.tmdb.org/t/p/w300";

  return (
    <div className="container-fluid">
      <h3>Trending Movies</h3>
      {props.trendingMovies.map((trendingMovie) => (
        <div key = {trendingMovie.title}>
          <div
            className="image-container d-flex flex-wrap justify-content-start"
          >
            
              <img
                src={baseImgURL + trendingMovie.poster_path}
                alt="show"
              ></img>
              <div className="overlay d-flex align-items-center justify-content-center">
                <div className="overflow-auto">
                  <p>{trendingMovie.overview}</p>
                </div>
                <button
                  onClick={() => props.handleAddFavourites(trendingMovie)}
                >
                  Add to Favourites
                </button>
              </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingMoviesList;
