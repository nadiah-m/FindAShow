import React from "react";

const ShowList = (props) => {
  const baseImgURL = "https://image.tmdb.org/t/p/w300";

  return (
    <div className = "container-fluid">
      {props.shows.map((show, index) => (
        <>
          <div
            key={show.title}
            className="image-container d-flex flex-wrap justify-content-start"
          >
            <img src={baseImgURL + show.poster_path} alt="show"></img>

            <div className="overlay d-flex align-items-center justify-content-center">
              <div className="overflow-auto">
                <p>{show.overview}</p>
              </div>
              <button onClick={() => props.handleAddFavourites(show)}>
                Add to Favourites
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ShowList;
