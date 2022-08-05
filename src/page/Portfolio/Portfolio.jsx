import React from "react";
import Mypage from "./Mypage";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Portfolio = ({ here }) => {
  return (
    <PortfolioBox here={here}>
      <Container>
        <PortfolioTitie>Portfolio</PortfolioTitie>
        <Mypage />
      </Container>
    </PortfolioBox>
  );
};
const PortfolioTitie = styled.div`
  font-size: 5rem;
  margin-bottom: 2rem;
`;
const PortfolioBox = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;

  @keyframes loadEffect5 {
    0% {
      background-color: #132743;
    }
  }

  animation: ${(props) => {
    if (props.here >= 82) {
      return "0.6s ease-in-out  loadEffect5";
    }
  }};
  background-color: ${(props) => {
    if (props.here < 82) {
      return "#132743";
    } else if (props.here >= 82) {
      // return "#970747";
      return "#C8C2BC";
    }
  }};
`;

export default Portfolio;
