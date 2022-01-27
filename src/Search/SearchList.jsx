import React from "react";
import { useState, useEffect } from "react";
import HeartIcon from "./HeartIcon";
import "./SearchList.css";

function SearchList(props) {
  const baseImgURL = "https://image.tmdb.org/t/p/w300";

  const [searchList, setSearchList] = useState([]);

  const getSearchList = () => {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=854888e6719c0f864d6db29cdfe47090&language=en-US&query=${props.searchValue}&page=1`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const n = data.results;
        if (n) {
          setSearchList(n);
        }

        console.log(searchList);
      });
  };

  useEffect(() => {
    getSearchList();
  }, [props.searchValue]);

  return (
    <div>
      <div>
        <div className="row row-cols-auto g-3 d-flex m-3">
          {searchList.map((searchItem, index) => (
            <div key={index}>
              <div className="image-container col overflow-auto">
                <img src={baseImgURL + searchItem.poster_path} alt="show"></img>
                <div className="overlay align-items-center overflow-scroll row row-cols-1">
                  <div className="col">
                    <p>{searchItem.overview}</p>
                  </div>
                  <div className="col">
                    <p>User rating: {searchItem.vote_average}</p>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-outline-light btn-sm"
                      onClick={() => props.handleAddFavourites(searchItem)}
                    >
                      <HeartIcon />
                      <div className="mr-2">Add to Favourites</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    //     <div>
    //     <div className="container-fluid">
    //       <div className="m-3">
    //         <h5>{props.searchValue}</h5>
    //       </div>
    //       <div className="row row-cols-auto g-3 d-flex flex-nowrap m-3 overflow-auto">
    //         {props.searchList.map((searchItem) => (
    //           <div key={searchItem.original_title}>
    //             <div className="image-container col overflow-auto">
    //               <img
    //                 src={baseImgURL + searchItem.poster_path}
    //                 alt="show"
    //               ></img>
    //               <div className="overlay align-items-center overflow-scroll row row-cols-1">
    //                 <div className="col">
    //                   <p>{searchItem.overview}</p>
    //                 </div>
    //                 <div className="col">
    //                   <p>User rating: {searchItem.vote_average}</p>
    //                 </div>
    //                 <div className="col">
    //                   <button
    //                     type="button"
    //                     className="btn btn-outline-light btn-sm"
    //                     onClick={() => props.handleAddFavourites(searchItem)}
    //                   >
    //                     <HeartIcon />
    //                     <div className="mr-2">Add to Favourites</div>
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
  );
}
export default SearchList;
