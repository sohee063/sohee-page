import React, { useEffect } from "react";
import Weather from "./Weather";
import { useNavigate } from "react-router-dom";
import { useScrollY } from "../../redux/Scroll";

const Work = () => {
  const navigate = useNavigate();
  // let scroll = useScrollY();
  // useEffect(() => {
  //   if (scroll === 1) {
  //     navigate("/about");
  //   }
  // }, [scroll]);
  return (
    <div>
      <Weather />
    </div>
  );
};

export default Work;
