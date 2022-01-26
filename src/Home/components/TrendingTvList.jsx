import React from "react";

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
                <div className="overlay overflow-scroll">
                  <p>{trendingSeries.overview}</p>
                  <p>User rating: {trendingSeries.vote_average}</p>
                  <button
                    onClick={() => props.handleAddFavourites(trendingSeries)}
                  >
                    Add to Favourites
                  </button>
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
