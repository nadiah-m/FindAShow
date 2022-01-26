import React from "react";
import "./ShowType.css";

function ShowType(props) {
  return (
    <>
      <p>Select Type</p>
      {/* <ul className="show-types"> */}
        {/* <div className = "form-check "> */}
        {props.showTypes.map((showType) => (
          // <li key={showType.value} className="show-type">
            <div key={showType.value} className = "form-check form-check-inline">
            <input className = "form-check-input"
              checked={showType.value === props.showTypeChecked}
              onChange={() => props.onChange(showType.value)}
              type="radio"
            />
            <label className ="form-check-label">{showType.label}</label>
            </div>
          // </li>
        ))}
        {/* </div> */}
      {/* </ul> */}
    </>
  );
}

export default ShowType;
