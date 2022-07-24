import React from "react";
import Notice from "../component/Notice";
import styled from "styled-components";

const About = () => {
  const AboutBox = styled.div`
    transition: 500ms;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  `;
  const AboutTittle = styled.div`
    font-size: 50px;
    margin: 30px;
  `;
  return (
    <AboutBox>
      <AboutTittle>안녕하세요. 김소희 입니다 👧🏻</AboutTittle>
      <Notice />
    </AboutBox>
  );
};

export default About;
