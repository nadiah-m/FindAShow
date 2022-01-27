import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import GetShow from "./GetShow/GetShow";
import FavouritesList from "./Favourites/FavouritesList";
import SearchBox from "./Search/SearchBox";
import SearchList from "./Search/SearchList";

function App() {
  const [favourites, setFavourites] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };

  const handleAddFavourites = (show) => {
    alert("Added to Favourites");
    setFavourites([...favourites, show]);
  };

  const handleRemoveFavourites = (show) => {
    const newFavouritesList = favourites.filter(
      (favourite) => favourite.id !== show.id
    );
    setFavourites(newFavouritesList);
    console.log(favourites);
  };

  console.log(favourites);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/get-show">
                Get Show Recommendations
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/favourites-list">
                Favourites
              </Link>
            </li>
            <li className="nav-item active">
              <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                <SearchBox
                  className="nav-link"
                  searchValue={searchValue}
                  handleSearch={handleSearch}
                />
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home handleAddFavourites={handleAddFavourites} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/get-show"
            element={<GetShow handleAddFavourites={handleAddFavourites} />}
          />
          <Route
            path="/favourites-list"
            element={
              <FavouritesList
                favourites={favourites}
                handleRemoveFavourites={handleRemoveFavourites}
              />
            }
          />
          <Route
            path="/search-list"
            element={
              <SearchList
                searchValue={searchValue}
                handleSearch={handleSearch}
                handleAddFavourites={handleAddFavourites}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
