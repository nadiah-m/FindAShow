import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GetShow.css";
import ShowList from "./components/ShowList";
import Form from "./components/Form";
import genres from "./GenreData";

function GetShow() {
  const [shows, setShows] = useState([]);

  // const [formDataObj, setFormDataObj] = useState({
  //   showTypeChecked: "",
  // });

  const [showTypeChecked, setShowTypeChecked] = useState(false);

  // const [genreState, setGenreState] = useState(
  //   new Array(genres.length).fill(false)
  // );

  const [time, setTime] = useState(0);

  //Type
  const onChooseShowType = (value) => {
    // setFormDataObj({...formDataObj,
    //   showTypeChecked: value })
    setShowTypeChecked(value);
  };
  //

  //Genre

  // const onChooseGenre = (position) => {
  //   const updateGenreState = genreState.map((item, index) =>
  //     index === position ? !item : item
  //   );

  //   setGenreState(updateGenreState);
  // };
  // console.log(genreState);

  // const getGenreArray = genreState.map((item, index) => {
  //   if (item === true) {
  //     return genres[index].id;
  //   } else return false;
  // });

  // const getGenreValue = getGenreArray.filter((value) => value);
  // const genreValue = getGenreValue.toString();
  // console.log(genreValue);

  // const getGenreValue = () => {
  //   const filtered = getGenreArray.filter((value) => value);
  //   console.log(filtered)
  //   const genreValue = filtered.toString();
  //   console.log(genreValue)
  //   setGenreState(genreValue);
    
  // };
  
  // console.log(genreState);

  //
  const onChooseTime = (event) => {
    setTime(event.target.value);
   
  };

  
  const showTypes = [
    { label: "Movies", value: "movies" },
    { label: "TV series", value: "tv" },
  ];

  const handleSubmit = (event) => {
    // let navigate = useNavigate();
    event.preventDefault();
    // setGenreState(genreValue)
    // console.log(showTypeChecked);
    // console.log(genreValue);
    // console.log(time);
    // navigate("/generate");
    // return <Link to = "/generate"></Link>
  };

  const getShowRequest = (showTypeChecked, time) => {
    const url = `https://api.themoviedb.org/3/discover/${showTypeChecked}?api_key=854888e6719c0f864d6db29cdfe47090&language=en-US&sort_by=popularity.desc&page=1&with_runtime.lte=${time}&with_watch_monetization_types=flatrate`;
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
    <div className="container-fluid show-app">
      <div className="row">
        <Form
          showTypes={showTypes}
          onChooseShowType={onChooseShowType}
          handleSubmit={handleSubmit}
          showTypes={showTypes}
          showTypeChecked={showTypeChecked}
          // formDataObj={formDataObj}

          onChooseTime = {onChooseTime}

          // onChooseGenre={onChooseGenre}
          // genres={genres}
          // genreState={genreState}
          // getGenreValue={getGenreValue}
        />
        <ShowList shows={shows} />
      </div>
    </div>
  );
}

export default GetShow;
