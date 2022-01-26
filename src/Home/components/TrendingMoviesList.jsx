import React from "react";
import HeartIcon from "./HeartIcon";

const TrendingMoviesList = (props) => {
  const baseImgURL = "https://image.tmdb.org/t/p/w300";

  return (
    <div>
      <div className="container-fluid">
        <div className="m-3">
          <h5>Trending Movies</h5>
        </div>
        <div className="row row-cols-auto g-3 d-flex flex-nowrap m-3 overflow-auto">
          {props.trendingMovies.map((trendingMovie) => (
            <div key={trendingMovie.title}>
              <div className="image-container col overflow-auto">
                <img
                  src={baseImgURL + trendingMovie.poster_path}
                  alt="show"
                ></img>
                <div className="overlay align-items-center overflow-scroll row row-cols-1">
                  <div class="col">
                    <p>{trendingMovie.overview}</p>
                  </div>
                  <div class="col">
                    <p>User rating: {trendingMovie.vote_average}</p>
                  </div>
                  <div class="col">
                    <button type = "button" class = "btn btn-outline-light btn-sm"
                      onClick={() => props.handleAddFavourites(trendingMovie)}
                    > 
                    <HeartIcon />
                    <div className ="mr-2">
                    Add to Favourites
                    </div>
    
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingMoviesList;
