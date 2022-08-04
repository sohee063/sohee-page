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
  margin-left: 8px;
  background: #ff4742;
  border: 1px solid #ff4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;

  :hover,
  :active {
    background-color: white;
    background-position: 0 0;
    color: #ff4742;
  }

  :active {
    opacity: 0.8;
    transition: 100ms;
  }
`;

export default PortfolioBtn;
