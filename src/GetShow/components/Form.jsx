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
              <label htmlFor="form-label" className="form-label">
                Running Time
              </label>
              <input
                className="form-control form-control-sm"
                aria-label="form-control-sm"
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
