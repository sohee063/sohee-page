import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faB,
  faEnvelope,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

const HomeCard = ({ here }) => {
  return (
    <CardBox here={here}>
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
  transform: translate(0,0px);
}

50%{
  transform: translate(0,10px)
}

100%{
  transform: translate(0,0);
}
`;

const CardBox = styled.div`
  color: #f0ebe3;
  @keyframes loadEffect1 {
    0% {
      transform: translateX(30px);
      display: none;
    }
    50% {
      transform: translateX(-60px);
      display: none;
    }
    100% {
      transform: translateX(0px);
      display: block;
    }
  }
  animation: ${(props) =>
    props.here >= 15 && props.here <= 52 ? "2s 1 ease-in loadEffect1" : ""};
  display: ${(props) => (props.here >= 15 ? "block" : "none")};
  animation: ${slide} 2s 0s infinite linear normal;
  animation-timing-function: ease-out;

  > :first-child {
    background-color: #f7eddb;
    border-radius: 12px;
    color: #121212;
    /* display: inline-flex; */
    font-family: Inter, sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1;
    padding: 1rem 1.2rem;
  }

  > div:nth-child(2) {
    font-size: 1.8rem;
    margin-top: 1rem;
    > a {
      color: #f7eddb;
    }
    > a:hover {
      transform: scale(1.1);
      transition: 500ms;
      color: black;
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
