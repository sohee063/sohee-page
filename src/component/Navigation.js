import React from "react";
import { Link } from "react-router-dom";
import { StyledComponent } from "styled-components";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav-box">
        <div className="nav">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/work" className="nav-item">
            Work
          </Link>
          <Link to="/about" className="nav-item">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
