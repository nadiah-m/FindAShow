import "./App.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";
import { Routes, Route, Link} from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import GetShow from "./GetShow/GetShow";

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

    <nav>
      <Link to = "/">
        Home
      </Link>
      <Link to = "/about">
        About
      </Link>
      <Link to = "/get-show">
        Get Show Recommendations
      </Link>
    </nav>
    <main>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "about" element = {<About />} />
        <Route path = "get-show" element = {<GetShow />} />
        
      </Routes>
    </main>
    </div>
  );
    }


export default App;
