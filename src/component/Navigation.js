import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Navbar>
      <div>
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
      </div>
    </Navbar>
  );
};

const Navbar = styled.div`
  width: 230px;
  background-color: rgba(77, 74, 74, 0.5);
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
      text-decoration: none;
      color: white;
      z-index: 1;
      margin: 0.8rem;
      font-size: 1rem;
    }

    > *:hover {
      color: #2c3639;
    }

    > *::after {
      display: block;
      content: "";
      border-bottom: solid 3px white;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }

    > *:hover:after {
      transform: scaleX(1);
    }
    > *.fromRight:after {
      transform-origin: 100% 50%;
    }
    > *.fromLeft:after {
      transform-origin: 0% 50%;
    }
  }
`;

export default Navigation;
