import React from "react";
import "./ShowType.css";

function ShowType(props) {
  return (
    <>
      <p>Select Type</p>
  
        {props.showTypes.map((showType) => (
     
            <div key={showType.value} className = "form-check form-check-inline">
            <input className = "form-check-input"
              checked={showType.value === props.showTypeChecked}
              onChange={() => props.onChange(showType.value)}
              type="radio"
            />
            <label className ="form-check-label">{showType.label}</label>
            </div>
       
        ))}

    </>
  );
}

export default ShowType;
