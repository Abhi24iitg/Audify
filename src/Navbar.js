import React from "react";
import "./Navbar.css";
const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="left">
        <a href="/">
          <h3>{props.title}</h3>
        </a>
        <a href="/convert">
          <h4>Convert</h4>
        </a>
        <a href="/about">
          <h4>About Us</h4>
        </a>
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
