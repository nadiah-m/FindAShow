import React from "react";

const ShowList = (props) => {

  const baseImgURL = "https://image.tmdb.org/t/p/w300"

  return (
    <>
      {props.shows.map((show, index) => (
        <div key={show.title} className = "image-container d-flex justify-content-start m-3">
     

          <img src = { baseImgURL + show.poster_path} alt = "show"></img>
        </div>
      ))}
    </>
  );
};

export default ShowList;
