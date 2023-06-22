import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = (props) => {
  return (
    <nav className="navbar" style={props.blur}>
      <div className="left">
        <Link className="link" to="/">
          <h3>{props.title}</h3>
        </Link>
        <Link className="link" to="/convert">
          <h4>Convert</h4>
        </Link>
        <Link className="link" to="/about">
          <h4>About Us</h4>
        </Link>
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
