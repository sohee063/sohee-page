import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faB,
  faEnvelope,
  faCodeBranch
} from "@fortawesome/free-solid-svg-icons";
import { Container, Col, Row } from "react-bootstrap";

const HomeCard = ({ here }) => {
  return (
    <Container>
      <CardBox here={here}>
        <Row>
          <Col sm={6}>
            <a
              href="https://github.com/sohee063"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faCodeBranch} /> <span>Github</span>
            </a>
          </Col>
          <Col sm={6}>
            <a
              href="https://www.notion.so/147609eb68d94b15967bb7fb07ea538a"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faB} /> <span>Blog</span>
            </a>
          </Col>
          <Col sm={12}>
            <a
              href="mailto:soheeweb@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>soheeweb@gmail.com</span>
            </a>
          </Col>
          {/* <Col sm={6}>
            <a>
              <FontAwesomeIcon icon={faMobileScreen} />
              <span>010.5022.3946</span>
            </a>
          </Col> */}
        </Row>
      </CardBox>
    </Container>
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
  margin-top: 3rem;
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
  animation: ${slide} 2s 0s infinite linear normal;
  animation-timing-function: ease-out;
  border-radius: 12px;
  color: #121212;
  display: inline-flex;
  font-family: Inter, sans-serif;
  font-size: 1.1rem;
  padding: 1rem;
  display: flex;
  align-items: center;

  > div > div > a {
    text-decoration: none;
    color: black;
    background: rgba(255, 255, 255, 0.5);
    width: 100%;
    margin: 1rem;
    padding: rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;

    > :first-child {
      font-size: 1.5rem;
      color: black;
    }
    > span {
      margin-top: 0.5rem;
    }

    :hover {
      background: rgba(255, 255, 255, 0.8);
      transition: 500ms;
      color: black;
    }
  }
`;

export default HomeCard;
