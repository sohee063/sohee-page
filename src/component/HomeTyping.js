import React from "react";
import TypeIt from "typeit-react";
import styled from "styled-components";

const HomeTyping = () => {
  return (
    <HomeBox>
      <TypeIt options={{ speed: 200, cursorChar: "" }}>
        SOHEE
        <br />
        KIM
      </TypeIt>
    </HomeBox>
  );
};

const HomeBox = styled.div`
  position: relative;
`;

export default HomeTyping;
