import React from "react";
import styled, { keyframes } from "styled-components";
import html from "../img/html.png";
import css from "../img/css.png";
import javascript from "../img/javascript.png";
import react from "../img/react.png";
import redux from "../img/redux.png";

const AboutSkills = () => {
  return (
    <SkillsBox>
      <div>
        <div>Skills</div>
        <div>
          <img src={html} />
          <img src={css} />
          <img src={javascript} />
          <img src={react} />
          <img src={redux} />
        </div>
      </div>
      <div>
        <div>Career</div>
        <span>
          <span>
            1. 전자공학 전공
            <br />
            2. Hardware 개발 (6년 7개월)
            <br /> : 회로설계(FPGA, MICOM, Image sensor) 및 디버깅, EMC 인증
            <br />
            <br />
            3. 코드스테이츠...
          </span>
        </span>
      </div>
    </SkillsBox>
  );
};

const SkillsBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  > div {
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }

  > div:nth-child(1) > :nth-child(2) > img {
    width: 5rem;
    height: 5rem;
    margin: 3px;
  }
  > div:nth-child(2) > span {
    font-size: 1.2rem;
  }
`;

export default AboutSkills;
