import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faB,
  faEnvelope,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
const HomeCard = () => {
  return (
    <CardBox>
      <div>Contact</div>
      <div>
        <a href="https://github.com/sohee063" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faCodeBranch} />
        </a>
        <a
          href="https://www.notion.so/147609eb68d94b15967bb7fb07ea538a"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faB} />
        </a>
        <a href="mailto:soheeweb@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </CardBox>
  );
};

const slide = keyframes`

0%{
    color:#377D71;
    background-color: #f0ebe3;
    bottom: -40px;
}
10%{
    color:#377D71;
    background-color: #f0ebe3;


}
100%{
  display: block;
  color: #f0ebe3;
  background-color:#4c3575;
}
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  background-color: #4c3575;
  color: #f0ebe3;
  position: absolute;
  bottom: -30px;
  width: 100%;
  height: 250px;
  padding-bottom: 50px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  animation: ${slide} 500ms 0s 1 linear normal;
  animation-timing-function: ease-out;

  > div {
    font-size: 40px;
  }
  > div:first-child {
    color: #e7f6f2;
  }
  > div:nth-child(2) {
    display: flex;
    align-items: center;
    > a {
      color: #f7eddb;
    }
    > a:hover {
      color: #1b2430;
    }
    > :nth-child(1) {
      margin-right: 100px;
    }
    > :nth-child(2) {
      margin-right: 100px;
    }
  }
`;

export default HomeCard;
