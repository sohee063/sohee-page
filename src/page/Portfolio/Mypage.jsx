import React, { useState } from "react";
import styled from "styled-components";
import soheepage from "../../img/soheepage.png";
import PortfolioTitle from "../../component/PortfolioTitle";
import PortfolioBtn from "../../component/PortfolioBtn";
import { Col, Container, Row } from "react-bootstrap";

const Mypage = () => {
  return (
    <Container>
      <SoheePageBox>
        <PortfolioTitle />
        <Row>
          <Col lg={6} sm={12}>
            <Image src={soheepage} />
          </Col>
          <Col lg={6} sm={12}>
            <Contents>
              프론트엔드 개발자를 준비하는 과정에서 나만의 page를 통해 저를
              표현하고 싶었습니다.
              <br />
              <br />- React 기반.
              <br />- Styled-components를 활용.
              <br />- scroll 위치에 따른 애니메이션 적용.
              <br />- 미디어쿼리를 이용한 반응형 웹 구현.
            </Contents>
          </Col>
        </Row>
        <PortfolioBtn />
      </SoheePageBox>
    </Container>
  );
};

const SoheePageBox = styled.div`
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  /* background: rgba(255, 255, 255, 0.8); */
  padding: 1.1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 25px 50px -12px;
  > :nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%;
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
