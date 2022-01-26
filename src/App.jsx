import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import GetShow from "./GetShow/GetShow";
import FavouritesList from "./Favourites/FavouritesList";

function App() {
  const [favourites, setFavourites] = useState([]);

  const handleAddFavourites = (show) => {
    console.log("click");
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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/get-show">Get Show Recommendations</Link>
        <Link to="/about">About</Link>
        <Link to="/favourites-list">Favourites</Link>
      </nav>
      <Outlet />
      <main>
        <Routes>
          <Route path="/" element={<Home handleAddFavourites={handleAddFavourites} />} />
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
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
