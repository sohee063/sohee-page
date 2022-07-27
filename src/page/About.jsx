import React, { useEffect, useState } from "react";
import Notice from "../component/Notice";
import styled, { keyframes } from "styled-components";
import { faAnglesUp, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeCard from "../component/HomeCard";
import AboutSkills from "../component/AboutSkills";
import { Container, Col, Row } from "react-bootstrap";
import dumbo from "../img/dumbo.JPG";

const About = () => {
  const [cardClick, setCardClick] = useState(false);
  const onClick = () => {
    setCardClick(!cardClick);
  };

  return (
    <Box>
      <Container>
        <Row lg={12}>
          <Col lg={8}>
            <Row lg={12}>
              <AboutBox>
                <AboutTitle>Sohee Kim</AboutTitle>
                <SubTitle>
                  하드웨어 개발자에서 프론트엔드 개발자로 전향하기 위해 열심히
                  달려가는 중입니다. 👶🏻 <br /> "언제나 새로운 것을 받아들일 줄
                  아는 사람"이 되고 싶습니다. <br />
                  매번 변화하는 기술에 뒤처지지 않는 개발자가 되고자 합니다.
                </SubTitle>
                <HomeCard />
              </AboutBox>
            </Row>
          </Col>
          <Col lg={4}>
            <AboutBox>
              <img src={dumbo} />
            </AboutBox>
          </Col>
        </Row>
      </Container>
      <AboutSkills />
      <Notice />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
const AboutBox = styled.div`
  white-space: pre-wrap;
  transition: 500ms;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    height: 400px;
    border-radius: 30px;
  }
`;

const AboutTitle = styled.div`
  font-size: 6rem;
  text-align: center;
`;

const SubTitle = styled(AboutTitle)`
  font-size: 18px;
  margin-bottom: 1rem;
  text-align: center;
`;

export default About;
