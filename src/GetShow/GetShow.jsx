import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GetShow.css";
import ShowList from "./components/ShowList";
import Form from "./components/Form";
import Favourites from "./components/Favourites";

function GetShow() {
  const [shows, setShows] = useState([]);

  const [favourites, setFavourites] = useState("");

  const handleAddFavourites = () => {
    setFavourites("clicked");
    console.log(favourites);
  };

  const [showTypeChecked, setShowTypeChecked] = useState("");

  const [time, setTime] = useState(300);

  //Type
  const onChooseShowType = (value) => {
    setShowTypeChecked(value);
  };

  const onChooseTime = (event) => {
    setTime(event.target.value);
  };

  const showTypes = [
    { label: "Movies", value: "movies" },
    { label: "TV series", value: "tv" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const API_KEY = import.meta.env.VITE_SOME_KEY;

  const getShowRequest = (showTypeChecked, time) => {
    const url = `https://api.themoviedb.org/3/discover/${showTypeChecked}?api_key=854888e6719c0f864d6db29cdfe47090&language=en-US&sort_by=popularity.desc&page=1&with_runtime.lte=${time}&with_status=0&with_type=0`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const n = data.results;

        if (n) {
          setShows(n);
          console.log(n);
        }
      });
  };

  useEffect(() => {
    getShowRequest(showTypeChecked, time);
  }, [showTypeChecked, time]);

  return (
    <div className="container-sm">
      <div className="row">
        <Form
          showTypes={showTypes}
          onChooseShowType={onChooseShowType}
          handleSubmit={handleSubmit}
          showTypes={showTypes}
          showTypeChecked={showTypeChecked}
          onChooseTime={onChooseTime}
        />
      </div>
      <div className="d-flex flex-row row-cols-4">
        <h3>{showTypeChecked}</h3>
        <ShowList shows={shows} />
        
      </div>

      
      <div className="d-flex flex-row row-cols-4">
      {/* <h3>Favourites</h3>
      <Favourites favourites = {favourites} handleAddFavourites = {handleAddFavourites} /> */}

      </div>
    </div>
  );
}

export default GetShow;
