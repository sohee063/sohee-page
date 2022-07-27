import React, { useEffect, useState } from "react";
import Home from "./Home";
import Work from "./Work";
import About from "./About";
import { useScrollY } from "../redux/Scroll";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  let scroll = useScrollY();

  useEffect(() => {
    if (scroll === 300) {
      navigate("/about");
    } else if (scroll === 600) {
      navigate("/work");
    }
    // if (scroll) {
    //   console.log(scroll);
    // }

    // // }
  }, [scroll]);

  return (
    <div>
      <Home />
      <About />
      <Work />
    </div>
  );
};

export default Main;
