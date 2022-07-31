import React from "react";
import { Badge } from "react-bootstrap";
import styled from "styled-components";

const PortfolioTitle = () => {
  return (
    <PortfolioTitleBox>
      <div>
        <div>My page</div>
        <div>2022.07 ~ 2022.08 (1명)</div>
      </div>
    </PortfolioTitleBox>
  );
};

const PortfolioTitleBox = styled.div`
  margin-bottom: 1rem;
  > :first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > :first-child {
      background-color: #000;
      border: 1px solid #000;
      border-radius: 4px;
      box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;
      color: #fff;
      display: inline-block;
      font-size: 35px;
      line-height: 20px;
      padding: 20px 40px;
      text-align: center;
    }
    > :nth-child(2) {
      font-size: 1rem;
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
