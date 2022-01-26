import React from "react";
import HeartIcon from "./HeartIcon";

const ShowList = (props) => {
  const baseImgURL = "https://image.tmdb.org/t/p/w300";

  const typeHeading = () => {
    if (props.showTypeChecked === "tv") {
      return "TV series";
    } else if (props.showTypeChecked === "movie") {
    return "Movies";
    } else return;
  };

  return (
    <div className="container-fluid">
      <div className="m-3">
        <h5>{typeHeading()}</h5>
      </div>
      <div className="row row-cols-auto g-3 d-flex m-3">
      {props.shows.map((show, index) => (
        <div key={show.title}>
          <div className="image-container col overflow-auto">
            <img src={baseImgURL + show.poster_path} alt="show"></img>

            <div className="overlay align-items-center overflow-scroll row row-cols-1">
              <div className="col">
                <p>{show.overview}</p>
              </div>
              <div class="col">
                    <p>User rating: {show.vote_average}</p>
                  </div>
                  <div class="col">
              <button type = "button" class = "btn btn-outline-light btn-sm" 
              onClick={() => props.handleAddFavourites(show)}>
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
  );
};

export default ShowList;
