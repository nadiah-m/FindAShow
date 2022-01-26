import React from "react";

const TrendingTvList = (props) => {
    const baseImgURL = "https://image.tmdb.org/t/p/w300";

return (
    <div className="container-fluid">
    <h3>Trending TV Series</h3>
    {props.trendingTv.map((trendingSeries) => (
      <div key = {trendingSeries.name}>
        <div
          className="image-container d-flex flex-wrap justify-content-start"
        >
          
            <img
              src={baseImgURL + trendingSeries.poster_path}
              alt="show"
            ></img>
            <div className="overlay d-flex align-items-center justify-content-center">
              <div className="overflow-auto">
                <p>{trendingSeries.overview}</p>
              </div>
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
)


}

export default TrendingTvList;