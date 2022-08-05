import React from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const PortfolioTitle = () => {
  return (
    <Container>
      <PortfolioTitleBox>
        <Row>
          <Col lg={3} sm={12}>
            My page
          </Col>
          <Col lg={9} sm={12}>
            2022.07 ~ 2022.08 (1명)
          </Col>
        </Row>
      </PortfolioTitleBox>
    </Container>
  );
};

const PortfolioTitleBox = styled.div`
  margin-bottom: 1rem;
  > :first-child {
    display: flex;
    align-items: center;
    > :first-child {
      background-color: #000;
      border: 1px solid #000;
      border-radius: 4px;
      box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;
      color: #fff;
      font-size: 35px;
      padding: 0.5rem;
      text-align: center;
      margin-bottom: 1rem;
    }
    > :nth-child(2) {
      font-size: 1rem;
      text-align: end;
    }
  }

  > :nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    font-size: 1.7rem;
  }
`;

export default PortfolioTitle;
