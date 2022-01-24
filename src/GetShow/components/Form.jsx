import React from "react";
import Genre from "../Genre";
import { useState } from "react";
import ShowType from "./ShowType";
import genres from "../GenreData";
import { Routes, Route, Link, Navigate, useNavigate} from "react-router-dom";


const showTypes = [
  { label: "Movies", value: "movie" },
  { label: "TV series", value: "tv" },
];

function Form(props) {
  

  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <ShowType
          onChange={(value) => props.onChooseShowType(value)}
          showTypeChecked={props.showTypeChecked}
          showTypes={showTypes}
    
          
        />
       
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
