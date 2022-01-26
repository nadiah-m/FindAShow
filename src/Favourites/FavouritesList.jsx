import React from "react";
import RemoveIcon from "./RemoveIcon";
import "./FavouritesList.css";

function FavouritesList(props) {
  const baseImgURL = "https://image.tmdb.org/t/p/w300";

  const handleClick = () => {
    console.log("Added to Fav");
  };

  return (
    <div className="container-fluid">
      <div className="m-3">
        <h5>Your Favourites</h5>
      </div>
      <div className="row row-cols-auto g-3 d-flex m-3">
        {props.favourites.map((show, index) => (
          <div key={index}>
            <div className="image-container col overflow-auto">
              <img
                onClick={handleClick}
                src={baseImgURL + show.poster_path}
                alt="show"
              ></img>

              <div className="overlay align-items-center overflow-scroll row row-cols-1">
                <div className="col">
                  <p>{show.overview}</p>
                </div>
                <div className="col">
                  <p>User rating: {show.vote_average}</p>
                  </div>
                  <div className="col">
                  <button type = "button" class = "btn btn-outline-light btn-sm" onClick={() => props.handleRemoveFavourites(show)}>
                    <RemoveIcon />
                    <div className="mr-2">
                    Remove from Favourites
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
}

export default FavouritesList;
