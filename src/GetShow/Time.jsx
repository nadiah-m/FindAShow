import React from "react";

function Time(props) {

    return (
        <>
        <label htmlFor="time">Running Time</label>
          <input
            type="text"
            placeholder="in minutes"
            onChange={props.onChange}
          />
        </>
    )
}

export default Time;