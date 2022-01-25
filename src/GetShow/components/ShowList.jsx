import React from "react";
import { Row, Col } from "react-bootstrap";

const ShowList = (props) => {
  const baseImgURL = "https://image.tmdb.org/t/p/w300";

  return (
    <>
      {props.shows.map((show, index) => (
        <>
        <div
          key={show.title}
          className="image-container d-flex flex-wrap justify-content-start"
        >
          
          <img src={baseImgURL + show.poster_path} alt="show"></img>
          
          <div className = "overlay d-flex align-items-center justify-content-center">
            <p>{show.overview}</p>
            <br />
            <p>{show.vote_average}</p>
          </div>
          </div>
          </>
      ))}
    </>
  );
};

export default ShowList;
