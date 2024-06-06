import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <NavLink to="/" activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/mybookshelf" activeclassname="active">
          My Bookshelf
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
