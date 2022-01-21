import React from "react";

const ShowList = (props) => {

  const baseImgURL = "https://image.tmdb.org/t/p/w300"

  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={movie.title}>
          <p>{movie.original_title}</p>

          <img src = { baseImgURL + movie.poster_path} alt = "movie"></img>
        </div>
      ))}
    </>
  );
};

export default ShowList;
