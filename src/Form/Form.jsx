import React from "react";
import genres from "./GenreData";
import {useState} from "react";

function Form() {

const [checkedState, setCheckedState] = useState(
  new Array(genres.length).fill(false)
);

console.log(checkedState)

const handleOnChange = (position) => {
  const updateCheckedState = checkedState.map((item, index) => index === position? !item : item);

  setCheckedState(updateCheckedState);

  console.log("updateCheckedState",updateCheckedState)
}

  return (
    <>
      <form> 
        <h3>Select Type</h3>
        <div>
          <input type="checkbox" name="movie" />
          <label htmlFor="movie">Movies</label>
          <input type="checkbox" name="tv" />
          <label htmlFor="tv">TV series</label>
        </div>

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
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={name}>{name}</label>
                </div>
              </li>
            );
          })}
        </ul>

        <div>
          <input type="checkbox" value="genre" name="action" />
          <label htmlFor="action">Action</label>

          {/* <input type="checkbox" value="genre" name="adventure" />
          <label for="adventure">Adventure</label>

          <input type="checkbox" value="genre" name="animation" />
          <label for="animation">Animation</label>

          <input type="checkbox" value="genre" name="comedy" />
          <label for="comedy">Comedy</label>

          <input type="checkbox" value="genre" name="drama" />
          <label for="drama">Drama</label>

          <input type="checkbox" value="genre" name="romance" />
          <label for="romance">Romance</label> */}
        </div>

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
