import React, { useEffect, useState } from "react";
import Notice from "../component/Notice";
import styled, { keyframes } from "styled-components";
import { faAnglesUp, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeCard from "../component/HomeCard";
import AboutSkills from "../component/AboutSkills";
import { Container, Col, Row } from "react-bootstrap";
import dumbo from "../img/dumbo.JPG";

const About = ({ here }) => {
  const [cardClick, setCardClick] = useState(false);
  const onClick = () => {
    setCardClick(!cardClick);
  };

  return (
    <Box here={here}>
      <Container here={here}>
        <Row lg={12}>
          <Col lg={7}>
            <Row lg={12}>
              <AboutBox>
                <AboutTitle here={here}>Sohee Kim</AboutTitle>
                <SubTitle here={here}>
                  하드웨어 개발자에서 프론트엔드 개발자로 전향하기 위해 열심히
                  달려가는 중입니다. 👶🏻 <br /> "언제나 새로운 것을 받아들일 줄
                  아는 사람"이 되고 싶습니다. <br />
                  매번 변화하는 기술에 뒤처지지 않는 개발자가 되고자 합니다.
                </SubTitle>
                <HomeCard here={here} />
              </AboutBox>
            </Row>
          </Col>
          <Col lg={5}>
            <AboutBox here={here}>
              <img here={here} src={dumbo} />
            </AboutBox>
          </Col>
        </Row>
      </Container>
      <AboutSkills here={here} />
      <Notice />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @keyframes loadEffect2 {
    0% {
      background-color: #f0ebe3;
    }
    100% {
      background-color: #374045;
    }
  }
  animation: ${(props) => (props.here ? "0.6s ease-in-out loadEffect2" : "")};
  background-color: ${(props) => (props.here ? "#374045" : "#f0ebe3")};
`;
const AboutBox = styled.div`
  white-space: pre-wrap;
  transition: 500ms;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12rem;

  > img {
    height: 50%;
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
    display: none;
    animation: ${(props) => (props.here ? "2s 1 ease-in loadEffect1" : "")};
    display: ${(props) => (props.here ? "block" : "none")};
  }
`;

const AboutTitle = styled.div`
  font-size: 6rem;
  text-align: center;
  color: #fff;
  display: none;
  font-family: "Secular One", sans-serif;
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
  animation: ${(props) => (props.here ? "1.3s 1 ease-in-out loadEffect1" : "")};
  display: ${(props) => (props.here ? "block" : "none")};
`;

const SubTitle = styled.div`
  font-size: 18px;
  margin-bottom: 1rem;
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
  animation: ${(props) => (props.here ? "1.3s 1 ease-in-out loadEffect1" : "")};
  display: ${(props) => (props.here ? "block" : "none")};
`;

export default About;
