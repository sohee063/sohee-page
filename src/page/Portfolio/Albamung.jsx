import React from "react";
import styled from "styled-components";
import albamung from "../../img/logo.png";
import { Col, Container, Row, Badge } from "react-bootstrap";

const Albamung = () => {
  return (
    <Container>
      <SoheePageBox>
        <PortfolioTitleBox>
          <Row>
            <Col lg={4} sm={12}>
              알바멍
            </Col>
            <Col lg={8} sm={12}>
              2022.09 ~ 2022.10 (프론트 2명, 백엔드 1명)
            </Col>
          </Row>
        </PortfolioTitleBox>
        <Row>
          <Col lg={6} sm={12}>
            <Image src={albamung} />
          </Col>
          <Col lg={6} sm={12}>
            <Contents>
              코드스테이츠 교육 과정에서 팀프로젝트를 진행하였습니다.
              견주-펫시터 매칭을 통해 안심하고 강아지를 산책 맡길 수 있는
              서비스를 개발하였습니다.
              <br />
              <br />- React 기반.
              <br />- Styled-components를 활용.
              <br />- 카카오지도API를 활용한 실시간 동선 기록 구현.
              <br />- 소셜로그인 구현.
            </Contents>
          </Col>
        </Row>
        <BtnBox>
          <div>
            <Badge pill bg="warning" text="dark">
              React
            </Badge>
            <Badge pill bg="warning" text="dark">
              Styled
            </Badge>
            <Badge pill bg="warning" text="dark">
              Redux-thunk
            </Badge>
            <Badge pill bg="warning" text="dark">
              Axios
            </Badge>
          </div>
          <div>
            <Btn>GitHub</Btn>
            <Btn>Live</Btn>
          </div>
        </BtnBox>
      </SoheePageBox>
    </Container>
  );
};

const SoheePageBox = styled.div`
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
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
  font-size: 0.9rem;
`;

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
      font-size: 2rem;
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

export default Albamung;
