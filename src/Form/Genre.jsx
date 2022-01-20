import React from "react";
import genres from "./GenreData";
import { useState } from "react";

function Genre() {
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
    </>
  );
}

export default Genre;
