import React from "react";

function Type() {

    const handleMovieClick = () => {
        console.log("clicked")
    }


  return (
    <>
    
        <h3>Select Type</h3>
        <div>
          <button onClick = {handleMovieClick}>Movies</button>
          <button>TV series</button>

          {/* <input type="checkbox" name="movie" />
          <label htmlFor="movie">Movies</label>
          <input type="checkbox" name="tv" />
          <label htmlFor="tv">TV series</label> */}
        </div>
     
    </>
  );
}

export default Type;
