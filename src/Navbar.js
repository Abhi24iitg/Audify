import React from "react";
import "./Navbar.css";
const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="left">
        <h3>{props.title}</h3>
        <h4>About</h4>
        <h4>Contact</h4>
      </div>
      <div className="right">
        <div className="form-check form-switch">
          <input
            onClick={props.togglemode}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
        <a href="/">
          <button className="signout">Sign Out</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
