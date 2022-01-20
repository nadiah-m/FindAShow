import React from "react";

import { useState } from "react";
import Options from "./Options";



function Form() {
  const [showOptions, setShowOptions] = useState(false);
  const [disable, setDisable] = useState(false);
 
  const handleMovieClick = () => {
    console.log("clicked");
    setShowOptions(true);
  };

  const handleTvClick = () => {
    console.log("clicked");
    setShowOptions(true);
  };

  const disableBtn = () => {
    if (handleMovieClick || handleTvClick) {
      setDisable(true);
    }
  };

  return (
    <>
      <h3>Select Type</h3>

      <button onClick={handleMovieClick}>Movies</button>
      <button onClick={handleTvClick}>TV series</button>
      {showOptions ? <Options /> : null}
      

      {/* <form> */}
      {/* <h3>Select Type</h3>
        <div>
          <input type="checkbox" name="movie" />
          <label htmlFor="movie">Movies</label>
          <input type="checkbox" name="tv" />
          <label htmlFor="tv">TV series</label>
        </div> */}

      

      {/* <p>Choose length of show:</p>
        
      </form>

      <button>Submit</button> */}
    </>
  );
}

export default Form;
