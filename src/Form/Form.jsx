import React from "react";

function Form() {
  return (
    <>
      <form>
        <div>
          <input type="checkbox" name="movie" />
          <label for="movie">Movies</label>
          <input type="checkbox" name="tv" />
          <label for="tv">TV series</label>
        </div>

        <p>Choose genre:</p>
        <div>
          <input type="checkbox" value="genre" name="action" />
          <label for="action">Action</label>

          <input type="checkbox" value="genre" name="adventure" />
          <label for="adventure">Adventure</label>

          <input type="checkbox" value="genre" name="animation" />
          <label for="animation">Animation</label>

          <input type="checkbox" value="genre" name="comedy" />
          <label for="comedy">Comedy</label>

          <input type="checkbox" value="genre" name="drama" />
          <label for="drama">Drama</label>

          <input type="checkbox" value="genre" name="romance" />
          <label for="romance">Romance</label>
        </div>

        <p>Choose length of show:</p>
        <div>
          <input type="checkbox" value="time" name="30" />
          <label for="30">30 mins</label>

          <input type="checkbox" value="time" name="45" />
          <label for="40">45 mins</label>

          <input type="checkbox" value="time" name="60" />
          <label for="60">60 mins</label>

          <input type="checkbox" value="time" name="120" />
          <label for="120">120 mins</label>

          <input type="checkbox" value="time" name="180" />
          <label for="180">180 mins</label>
        </div>

        <p>Streaming sites:</p>
        <div>
          <input type="checkbox" value="streaming" name="netflix" />
          <label for="netflix">Netflix</label>

          <input type="checkbox" value="streaming" name="amazon" />
          <label for="amazon">Amazon Prime</label>

          <input type="checkbox" value="streaming" name="disney" />
          <label for="disney">Disney Plus</label>
        </div>
      </form>

      <button>Submit</button>
    </>
  );
}

export default Form;
