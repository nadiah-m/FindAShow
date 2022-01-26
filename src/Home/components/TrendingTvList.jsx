import React from "react";
import HeartIcon from "./HeartIcon";

const TrendingTvList = (props) => {
  const baseImgURL = "https://image.tmdb.org/t/p/w300";

  return (
    <div>
      <div className="container-fluid">
        <div className="m-3">
          <h5>Trending TV Series</h5>
        </div>
        <div className="row row-cols-auto g-3 d-flex flex-nowrap m-3 overflow-auto">
          {props.trendingTv.map((trendingSeries) => (
            <div key={trendingSeries.name}>
              <div className="image-container col overflow-auto">
                <img
                  src={baseImgURL + trendingSeries.poster_path}
                  alt="show"
                ></img>
                <div className="overlay align-items-center overflow-scroll row row-cols-1">
                  <div class="col">
                    <p>{trendingSeries.overview}</p>
                  </div>
                  <div class="col">
                    <p>User rating: {trendingSeries.vote_average}</p>
                  </div>
                  <div class="col">
                    <button
                      type="button"
                      class="btn btn-outline-light btn-sm"
                      onClick={() => props.handleAddFavourites(trendingSeries)}
                    >
                      <HeartIcon />
                      <div className="mr-2">Add to Favourites</div>
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

export default TrendingTvList;
