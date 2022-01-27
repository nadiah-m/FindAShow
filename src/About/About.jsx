import React  from "react";


function About() {
    return (
      <div className = "container-fluid">
        <div className = "d-flex justify-content-center">
        <p>How the project came about</p>
        </div>
        <div className = "d-flex justify-content-center">
        <p>Data by <a href="https://www.themoviedb.org/">TMDB API</a>
        
        </p>
        </div>
      </div>
    );
}

export default About;