import React from "react";



function Genre(props) {
  

  return (
    <>
      <h3>Select Genre</h3>
      <ul className="genre-list">
        {props.genres.map(({ name, id }, index) => {
          return (
            <li key={index}>
              <div className="genre-list-item">
                <input
                  type="checkbox"
                  id={id}
                  name={name}
                  value={id}
                  checked={props.genreState[index]}
                  onChange={() => props.onChange(index)}
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
