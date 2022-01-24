import React from "react";
import "./ShowType.css";

function ShowType(props) {


  return (
    <>
      <h3>Select Type</h3>
      <ul className = "show-types">
        {props.showTypes.map(showType => (
          <li key={showType.value} className = "show-type">
             <input
                
                checked={showType.value === props.showTypeChecked}
                onChange={() => props.onChange(showType.value)}
                type="radio"
              />
            <label>
              {showType.label}
             
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShowType;
