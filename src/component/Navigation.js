import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Navbar>
      <div>
        <div>
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
    </Navbar>
  );
};

const Navbar = styled.div`
  position: absolute;
  top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    width: 200px;
    background-color: rgba(77, 74, 74, 0.5);
    border-radius: 10px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Navigation;
