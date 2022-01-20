import React from "react";
import Genre from "./Genre";
import { useState } from "react";

function Options() {
  const [time, setTime] = useState("");
  const handleChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <>
      <Genre />
      <div>
        <label htmlFor="time">Running Time</label>
        <input
          type="text"
          placeholder="in minutes"
          value={time}
          onChange={handleChange}
        />
      </div>
      <button>Submit</button>
    </>
  );
}

export default Options;
