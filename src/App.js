import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import HomeBrewery from "./components/HomeBrewery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleBrewery from "./components/SingleBrewery";
import RandomBrewery from "./components/RandomBrewery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomeBrewery />} />
        <Route path="/brewery/:brewery_id" element={<SingleBrewery />} />
        <Route path="/random" element={<RandomBrewery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
