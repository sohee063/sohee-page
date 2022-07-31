import React, { useState } from "react";
import styled from "styled-components";
import soheepage from "../../img/soheepage.png";
import PortfolioTitle from "../../component/PortfolioTitle";
import PortfolioBtn from "../../component/PortfolioBtn";
import { Col } from "react-bootstrap";

const Mypage = () => {
  return (
    <SoheePageBox>
      <PortfolioTitle />
      <div>
        <Col lg={7}>
          <div>
            <Image src={soheepage} />
          </div>
        </Col>
        <Col lg={5}>
          <Contents>
            프론트엔드 개발자를 준비하는 과정에서 나만의 page를 통해 저를
            표현하고 싶었습니다.
            <br /> - React를 기반 구현.
            <br /> - Styled-components를 활용하여 디자인.
            <br />- scroll 위치에 따른 애니메이션 적용.
            <br />- 미디어쿼리를 이용한 반응형 웹 구현.
          </Contents>
        </Col>
      </div>

      <PortfolioBtn />
    </SoheePageBox>
  );
};

const SoheePageBox = styled.div`
  border-radius: 30px;
  background-color: #fef4e8;
  padding: 3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 25px 50px -12px;
  box-shadow: rgba(50, 50, 93, 0.1) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  > :nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 90%;
  border-radius: 20px;
  margin-bottom: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const Contents = styled.div`
  margin: 1rem;
  font-family: "Nanum Myeongjo", serif;
`;

export default Mypage;
