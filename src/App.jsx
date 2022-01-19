import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState({});

  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=854888e6719c0f864d6db29cdfe47090&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
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
    <p></p>
    </div>
  );

}

export default App;
