import React from "react";
import styled from "styled-components";
import HomeCard from "../component/HomeCard";
import { Container, Col, Row } from "react-bootstrap";
import dumbo from "../img/dumbo.JPG";

const About = ({ here }) => {
  return (
    <div>
      <Box here={here}>
        <Container>
          <AboutBox here={here}>
            <Row lg={12}>
              <Col lg={6} sm={12}>
                <ProfileImg here={here} src={dumbo} />
              </Col>
              <Col lg={6} sm={12}>
                <AboutTitle here={here}>I'm Learning...!</AboutTitle>
                <SubTitle here={here}>
                  하드웨어 개발자에서 프론트엔드 개발자로 전향하기 위해 열심히
                  달려가는 중입니다. <br />
                  기본적으로 개발 업무를 좋아하며 문제를 디버깅 및 개선 하는
                  것을 좋아합니다.
                  <br />
                  <br />
                  <span style={{ "font-weight": "2000", color: "#FFFF8F" }}>
                    "언제나 새로운 것을 받아들일 줄 아는 사람"
                  </span>
                  이 되고 싶습니다.
                  <br />
                  매번 변화하는 기술에 뒤처지지 않는 개발자가 되고자 합니다.
                </SubTitle>
                <HomeCard here={here} />
              </Col>
            </Row>
          </AboutBox>
          {/* <Notice /> */}
        </Container>
      </Box>
    </div>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @keyframes loadEffect2 {
    0% {
      background-color: #f0ebe3;
    }
    100% {
      background-color: #374045;
    }
  }
  @keyframes loadEffect3 {
    0% {
      background-color: #374045;
    }
    100% {
      background-color: #132743;
    }
  }

  animation: ${(props) => {
    if (props.here >= 15 && props.here <= 45) {
      return "0.6s ease-in-out  loadEffect2";
    } else if (props.here > 45) {
      return "0.6s ease-in-out  loadEffect3";
    }
  }};
  background-color: ${(props) => {
    if (props.here >= 15 && props.here <= 45) {
      return "#374045";
    } else if (props.here > 45) {
      return "#132743";
    }
  }};
`;

const AboutBox = styled.div`
  white-space: pre-wrap;
  transition: 700ms;
  margin-top: 10rem;
  margin-bottom: 10rem;
  padding: 2rem;

  align-items: center;
  > div > div > div:first-child {
    display: flex;
    justify-content: center;
  }
  > div > div > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* transform: ${(props) => {
    if (props.here > 42) {
      return `translateY(60%)`;
    }
  }}; */
`;

const AboutTitle = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #fff;
  display: none;
  font-family: "Nanum Myeongjo", serif;
  font-weight: 1000;
  animation: 0.7s ease-in-out loadEffect1;
  text-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  @keyframes loadEffect1 {
    0% {
      transform: translateX(-30px);
    }
    50% {
      transform: translateX(30px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  animation: ${(props) =>
    props.here >= 15 && props.here <= 52
      ? "1.3s 1 ease-in-out loadEffect1"
      : ""};
  display: ${(props) => (props.here >= 15 ? "block" : "none")};
`;

const SubTitle = styled.div`
  font-size: 18px;
  margin-bottom: 5rem;
  text-align: center;
  color: #fdf6ec;
  @keyframes loadEffect1 {
    0% {
      transform: translateX(-30px);
    }
    50% {
      transform: translateX(30px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  display: none;
  animation: 0.7s ease-in-out loadEffect1;
  animation: ${(props) =>
    props.here >= 15 && props.here <= 52
      ? "1.3s 1 ease-in-out loadEffect1"
      : ""};
  display: ${(props) => (props.here >= 15 ? "block" : "none")};
`;

const ProfileImg = styled.img`
  width: 60%;
  display: none;
  border-radius: 30px;
  @keyframes loadEffect1 {
    0% {
      transform: translateX(30px);
      display: none;
    }
    50% {
      transform: translateX(-60px);
      display: none;
    }
    100% {
      transform: translateX(0px);
      display: block;
    }
  }
  animation: ${(props) =>
    props.here >= 15 && props.here <= 52 ? "2s 1 ease-in loadEffect1" : ""};
  display: ${(props) => (props.here >= 15 ? "block" : "none")};
`;

export default About;
