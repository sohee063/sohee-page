import React from "react";
import Mypage from "./Mypage";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Portfolio = ({ here }) => {
  return (
    <PortfolioBox here={here}>
      <Container>
        <Row>
          <Mypage />
        </Row>
      </Container>
    </PortfolioBox>
  );
};

const PortfolioBox = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;

  @keyframes loadEffect5 {
    0% {
      background-color: #132743;
    }
  }

  animation: ${(props) => {
    if (props.here >= 85) {
      return "0.6s ease-in-out  loadEffect5";
    }
  }};
  background-color: ${(props) => {
    if (props.here < 85) {
      return "#132743";
    } else if (props.here >= 85) {
      return "#970747";
    }
  }};
`;

export default Portfolio;
