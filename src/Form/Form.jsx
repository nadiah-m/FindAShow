import React from "react";
import genres from "./GenreData";
import { useState } from "react";
import Type from "./Type";

function Form() {
  const [genreState, setGenreState] = useState(
    new Array(genres.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updateGenreState = genreState.map((item, index) =>
      index === position ? !item : item
    );

    setGenreState(updateGenreState);
  };

  const getGenreArray = genreState.map((item, index) => {
    if (item === true) {
      return genres[index].id;
    } else return false;
  });

  const removeFalseInput = (arr) => {
    return arr.filter((value) => value);
  };

  const getGenreValue = removeFalseInput(getGenreArray);
  console.log(getGenreValue);

  return (
    <>
      
        <Type />
        <form>
        {/* <h3>Select Type</h3>
        <div>
          <input type="checkbox" name="movie" />
          <label htmlFor="movie">Movies</label>
          <input type="checkbox" name="tv" />
          <label htmlFor="tv">TV series</label>
        </div> */}

        <h3>Select Genre</h3>
        <ul className="genre-list">
          {genres.map(({ name, id }, index) => {
            return (
              <li key={index}>
                <div className="genre-list-item">
                  <input
                    type="checkbox"
                    id={id}
                    name={name}
                    value={id}
                    checked={genreState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={name}>{name}</label>
                </div>
              </li>
            );
          })}
        </ul>

        <p>Choose length of show:</p>
        <div>
          <input type="checkbox" value="time" name="30" />
          <label htmlFor="30">30 mins</label>

          <input type="checkbox" value="time" name="45" />
          <label htmlFor="40">45 mins</label>

          <input type="checkbox" value="time" name="60" />
          <label htmlFor="60">60 mins</label>

          <input type="checkbox" value="time" name="120" />
          <label htmlFor="120">120 mins</label>

          <input type="checkbox" value="time" name="180" />
          <label htmlFor="180">180 mins</label>
        </div>
      </form>

      <button>Submit</button>
    </>
  );
}

export default Form;
