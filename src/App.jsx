import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import GetShow from "./GetShow/GetShow";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/get-show">Get Show Recommendations</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-show" element={<GetShow />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
