import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import ShowList from "./ShowList/ShowList";
import Form from "./Form/Form";

function App() {
  const [movies, setMovies] = useState({});

  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/567189/recommendations?api_key=854888e6719c0f864d6db29cdfe47090&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        const n = data.results[0];
        setMovies(n);
      })
  };

  useEffect(() => {
    getMovies()}, []);
  
  return (
  <div className="App">
    <p>Movie Title: {movies?.original_title}</p>
    <p>Ratings: {movies?.vote_average}</p>
    <nav>
      <Link to = "/">
        Home
      </Link>
      <Link to = "/about">
        About
      </Link>
      <Link to = "/form">
        Get Show Recommendations
      </Link>
    </nav>
    <main>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "about" element = {<About />} />
        <Route path = "form" element = {<Form />} />
      </Routes>
    </main>
    </div>
  );
    }


export default App;
