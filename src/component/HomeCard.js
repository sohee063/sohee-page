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
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  background-color: #4c3575;
  color: #f0ebe3;
  width: 23rem;
  height: 8rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  animation: ${slide} 2s 0s infinite linear normal;
  animation-timing-function: ease-out;

  > div {
    font-size: 1.8rem;
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
