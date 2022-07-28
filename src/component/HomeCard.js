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
  padding: 1.5rem;
  text-align: center;
  margin-top: 5rem;
  width: 21rem;
  background-color: #1e212d;
  color: #f0ebe3;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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
    props.here >= 400 && props.here <= 2200 ? "2s 1 ease-in loadEffect1" : ""};
  /* display: ${(props) =>
    props.here >= 400 && props.here <= 2200 ? "block" : "none"}; */
  animation: ${slide} 2s 0s infinite linear normal;
  animation-timing-function: ease-out;

  > div {
    font-size: 1.8rem;
  }
  > div:first-child {
    color: #e7f6f2;
  }
  > div:nth-child(2) {
    margin-top: 1rem;
    > a {
      color: #f7eddb;
    }
    > a:hover {
      transform: scale(1.1);
      transition: 500ms;
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
