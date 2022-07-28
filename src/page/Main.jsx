import React, { useEffect, useState } from "react";
import Home from "./Home";
import Work from "./Work";
import About from "./About";
import { useScrollY } from "../Scroll";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  const navigate = useNavigate();
  let scroll = useScrollY();
  const [here, setHere] = useState(false);

  useEffect(() => {
    console.log(scroll);
    console.log(here);
    if (scroll >= 400 && scroll <= 1400) {
      setHere(true);
    } else if (scroll < 400) {
      setHere(false);
    } else if (scroll > 800 && scroll < 1500) {
      setHere(false);
    } else if (scroll >= 1500) {
      setHere(true);
    }
  }, [scroll]);

  return (
    <>
      <Home here={here} />
      <About here={here} />
      <Work here={here} />
    </>
  );
};

export default Main;
