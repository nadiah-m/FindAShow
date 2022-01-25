import React from "react";
import { useState } from "react";
import "./FavouritesList.css";

function FavouritesList(props) {
  const baseImgURL = "https://image.tmdb.org/t/p/w300";

  const handleClick = () => {
      console.log("Added to Fav");
  }

  return (
    <div className = "container-sm">
      {props.favourites.map((show, index) => (
        <>
          <div
            key={show.title}
            className="image-container flex-row d-flex flex-wrap justify-content-start row-cols-4"
          >
            <img onClick={handleClick} src={baseImgURL + show.poster_path} alt="show"></img>

            <div className="overlay d-flex align-items-center justify-content-center">
              <div className="overflow-auto">
                <p>{show.overview}</p>
                <button onClick = {() => props.handleRemoveFavourites(show)}>Remove from Favourites</button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default FavouritesList;
