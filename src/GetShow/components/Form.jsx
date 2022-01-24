import React from "react";
import Genre from "../Genre";
import { useState } from "react";
import ShowType from "./ShowType";
import genres from "../GenreData";
import Time from "../Time";
import { Routes, Route, Link, Navigate, useNavigate} from "react-router-dom";
import Generate from "../Generate/Generate";

const showTypes = [
  { label: "Movies", value: "movie" },
  { label: "TV series", value: "tv" },
];

function Form(props) {
  // const [showTypeChecked, setShowTypeChecked] = useState(false);

  // const [genreState, setGenreState] = useState(
  //   new Array(genres.length).fill(false)
  // );

  // const [time, setTime] = useState(0);

  // //Type
  // // const onChooseShowType = (value) => {
  // //   setShowTypeChecked(value);
  // // };
  // //

  // //Genre

  // const onChooseGenre = (position) => {
  //   const updateGenreState = genreState.map((item, index) =>
  //     index === position ? !item : item
  //   );

  //   setGenreState(updateGenreState);
  // };

  // const getGenreArray = genreState.map((item, index) => {
  //   if (item === true) {
  //     return genres[index].id;
  //   } else return false;
  // });

  // const getGenreValue = getGenreArray.filter((value) => value);
  // const genreValue = getGenreValue.toString();

  // //
  // const onChooseTime = (event) => {
  //   setTime(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   // let navigate = useNavigate();
  //   event.preventDefault();
  //   console.log(showTypeChecked);
  //   // console.log(genreValue);
  //   // console.log(time);
  //   // navigate("/generate");
  //   // return <Link to = "/generate"></Link>
  // };

  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <ShowType
          onChange={(value) => props.onChooseShowType(value)}
          showTypeChecked={props.showTypeChecked}
          showTypes={showTypes}
           // formDataObj={formDataObj}
          
        />
        {/* <Genre
          onChange={(index) => onChooseGenre(index)}
          genreState={props.genreState}
          genres={genres}
        /> */}
        <label htmlFor="time">Running Time</label>
          <input
            type="text"
            placeholder="in minutes"
            onChange={props.onChooseTime}
          />

       
        {/* <input type="submit" value="Submit" /> */}
       
      </form>
    </>
  );
}

export default Form;
