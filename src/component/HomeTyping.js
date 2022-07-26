import React from "react";
import TypeIt from "typeit-react";
import star from "../img/star.png";
import styled, { keyframes } from "styled-components";

const HomeTyping = () => {
  return (
    <HomeBox>
      <TypeIt options={{ speed: 200, cursorChar: "" }}>
        SOHEE
        <br />
        PAGE
      </TypeIt>
      <Star src={star} />
    </HomeBox>
  );
};
const turning = keyframes`
0%{

  transform: rotate(0deg);
}

40%{
  transform: rotate(-90deg);

}
70% {
  opacity: 0.1;  
  transform: rotate(-360deg);
}
90% {
  display: block;
  transform: rotate(0deg);
}
100%{
}
`;

const HomeBox = styled.div`
  position: relative;
`;

const Star = styled.img`
  position: absolute;
  top: 57%;
  left: 90%;
  width: 100px;
  animation: ${turning} 3s 0s infinite linear normal;
  animation-timing-function: ease-out;
`;

export default HomeTyping;
