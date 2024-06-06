import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MyBookShelf from "./pages/MyBookShelf";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mybookshelf" element={<MyBookShelf />} />
      </Routes>
    </Router>
  );
}

export default App;
