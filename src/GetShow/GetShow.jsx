import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GetShow.css";
import ShowList from "./components/ShowList";

function GetShow() {
  const [movies, setMovies] = useState([
    {
      adult: false,
      backdrop_path: "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
      genre_ids: [28, 12, 14, 878],
      id: 524434,
      original_language: "en",
      original_title: "Eternals",
      overview:
        "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
      popularity: 11424.242,
      poster_path: "/b6qUu00iIIkXX13szFy7d0CyNcg.jpg",
      release_date: "2021-11-03",
      title: "Eternals",
      video: false,
      vote_average: 7.3,
      vote_count: 3139,
    },
    {
      adult: false,
      backdrop_path: "/ur19n7Zabzf7wfhK4MrlFDJiZPI.jpg",
      genre_ids: [16, 10751, 14, 35, 12],
      id: 585083,
      original_language: "en",
      original_title: "Hotel Transylvania: Transformania",
      overview:
        "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy.",
      popularity: 10200.442,
      poster_path: "/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
      release_date: "2022-01-14",
      title: "Hotel Transylvania: Transformania",
      video: false,
      vote_average: 7.8,
      vote_count: 770,
    },
    {
      adult: false,
      backdrop_path: "/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg",
      genre_ids: [28, 12, 878],
      id: 634649,
      original_language: "en",
      original_title: "Spider-Man: No Way Home",
      overview:
        "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      popularity: 5874.67,
      poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      release_date: "2021-12-15",
      title: "Spider-Man: No Way Home",
      video: false,
      vote_average: 8.4,
      vote_count: 4367,
    },
    {
      adult: false,
      backdrop_path: "/tutaKitJJIaqZPyMz7rxrhb4Yxm.jpg",
      genre_ids: [16, 35, 10751, 10402],
      id: 438695,
      original_language: "en",
      original_title: "Sing 2",
      overview:
        "Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
      popularity: 5211.181,
      poster_path: "/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
      release_date: "2021-12-01",
      title: "Sing 2",
      video: false,
      vote_average: 8.3,
      vote_count: 1110,
    },
  ]);

  // const getMovies = () => {
  //   fetch(
  //     "https://api.themoviedb.org/3/discover/movie?api_key=854888e6719c0f864d6db29cdfe47090&language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const n = data.results[0];
  //       setMovies(n);
  //     });
  // };

  // useEffect(() => {
  //   getMovies();
  // }, []);

  return (
  <div className = "container-fluid show-app">
    <div className = "row">
    <ShowList movies = {movies}/>
    </div>
  </div>
  )
}

export default GetShow;
