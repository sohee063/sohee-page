import React, { useEffect, useState } from "react";
import Home from "./Home";
import Skill from "./Skill";
import About from "./About";
import { useScrollY } from "../Scroll";
import { useNavigate } from "react-router-dom";
import Portfolio from "./Portfolio/Portfolio";

const Main = () => {
  const navigate = useNavigate();
  let scroll = useScrollY();
  const [here, setHere] = useState(0);

  useEffect(() => {
    console.log(scroll);
    setHere(scroll);
  }, [scroll]);

  return (
    <>
      <a name="home">
        <Home here={here} />
      </a>
      <a name="about">
        <About here={here} />
      </a>
      <a name="skill">
        <Skill here={here} />
      </a>
      <a name="portfolio">
        <Portfolio here={here} />
      </a>
    </>
  );
};

export default Main;
