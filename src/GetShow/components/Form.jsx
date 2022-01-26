import React from "react";
import ShowType from "./ShowType";

const showTypes = [
  { label: "Movies", value: "movie" },
  { label: "TV series", value: "tv" },
];

function Form(props) {
  return (
    <>
      <form>
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <ShowType
              onChange={(value) => props.onChooseShowType(value)}
              showTypeChecked={props.showTypeChecked}
              showTypes={showTypes}
            />
          </div>
          <div className="col-4">
          <label htmlFor="time">Running Time</label>
          <input
            type="text"
            placeholder="in minutes"
            onChange={props.onChooseTime}
          />
          </div>
        </div>
        </div>
      </form>
    </>
  );
}

export default Form;
