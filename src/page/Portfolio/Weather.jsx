import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import weatherImg from "../../img/weather.png";
import styled from "styled-components";

const Weather = () => {
  return (
    <Container>
      <WeatherBox>
        <PortfolioTitleBox>
          <Row>
            <Col lg={4} sm={12}>
              Weather-app
            </Col>
            <Col lg={8} sm={12}>
              2022.07 ~ 2022.07 (1명)
            </Col>
          </Row>
        </PortfolioTitleBox>
        <Row>
          <Col lg={6} sm={12}>
            <Image src={weatherImg} />
          </Col>
          <Col lg={6} sm={12}>
            <Contents>
              Axios를 학습하면서 날씨 API에 적용 시켜 보았습니다.
              <br />
              현재 위치 기반 날씨와 다른 도시들의 날씨 정보를 받아 올 수
              있습니다.
              <br />
              <br />- React 기반.
              <br />- Redux-thunk, Axios 사용.
              <br />- 현재 위치 기반 날씨 구현.
              <br />- 날씨 상태에 따라 배경화면 변경.
            </Contents>
          </Col>
        </Row>
        <BtnBox>
          <div>
            <Badge pill bg="warning" text="dark">
              React
            </Badge>
            <Badge pill bg="warning" text="dark">
              Redux
            </Badge>
            <Badge pill bg="warning" text="dark">
              Redux-thunk
            </Badge>
          </div>
          <div>
            <Btn>GitHub</Btn>
            <Btn>Live</Btn>
          </div>
        </BtnBox>
      </WeatherBox>
    </Container>
  );
};

const WeatherBox = styled.div`
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
  height: 295.42px;
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

const Contents = styled.div`
  margin: 1rem;
  font-family: "Nanum Myeongjo", serif;
  font-size: 0.9rem;
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

export default Weather;
