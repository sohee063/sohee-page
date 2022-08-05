import React from "react";
import styled from "styled-components";
import { Badge } from "react-bootstrap";

const PortfolioBtn = () => {
  return (
    <BtnBox>
      <div>
        <Badge pill bg="warning" text="dark">
          React
        </Badge>
        <Badge pill bg="warning" text="dark">
          Styled
        </Badge>
      </div>
      <div>
        <Btn>GitHub</Btn>
        <Btn>Live</Btn>
      </div>
    </BtnBox>
  );
};

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  > div:first-child {
    font-size: 1.4rem;
    > span {
      margin-right: 0.5rem;
    }
  }
`;

const Btn = styled.button`
  margin: 0.4rem;
  background: #ff4742;
  border: 1px solid #ff4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  color: #ffffff;
  cursor: pointer;
  font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
  font-weight: 800;
  padding: 0.6rem;
  text-align: center;
  text-rendering: geometricprecision;

  :hover,
  :active {
    background-color: white;
    background-position: 0 0;
    color: #ff4742;
  }
`;

export default PortfolioBtn;
