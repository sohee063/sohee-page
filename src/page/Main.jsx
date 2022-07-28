import React, { useEffect, useState } from "react";
import Home from "./Home";
import Work from "./Work";
import Skill from "./Skill";
import About from "./About";
import { useScrollY } from "../Scroll";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  let scroll = useScrollY();
  const [here, setHere] = useState(0);

  useEffect(() => {
    console.log(scroll);
    console.log(here);
    setHere(scroll);
  }, [scroll]);

  return (
    <>
      <Home here={here} />
      <About here={here} />
      <Skill here={here} />
    </>
  );
};

export default Main;
