import React, { useEffect, useState } from "react";
import Notice from "../component/Notice";
import styled, { keyframes } from "styled-components";
import { faAnglesUp, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeCard from "../component/HomeCard";
import AboutSkills from "../component/AboutSkills";

const About = () => {
  const [cardClick, setCardClick] = useState(false);
  const onClick = () => {
    setCardClick(!cardClick);
  };
  return (
    <>
      <AboutBox>
        <AboutTittle>Sohee Kim</AboutTittle>
        <div>
          하드웨어 개발자에서 프론트엔드 개발자로 전향하기 위해 열심히 달려가는
          중입니다. 👶🏻 <br /> "언제나 새로운 것을 받아들일 줄 아는 사람"이 되고
          싶습니다. <br />
          매번 변화하는 기술에 뒤처지지 않는 개발자가 되고자 합니다.
        </div>
        <div>
          <AboutSkills />
          <Notice />
        </div>
      </AboutBox>
      {cardClick ? (
        <MoreCard>
          <HomeCard />
          <More cardClick={cardClick} onClick={onClick}>
            <FontAwesomeIcon icon={faAnglesDown} />
          </More>
        </MoreCard>
      ) : (
        <MoreCard>
          <More props={cardClick ? "white" : "black"} onClick={onClick}>
            <FontAwesomeIcon icon={faAnglesUp} />
            <div>Contact</div>
          </More>
        </MoreCard>
      )}
    </>
  );
};

const AboutBox = styled.div`
  white-space: pre-wrap;
  transition: 500ms;
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;
  }
  > div:nth-child(2) {
    font-size: 17px;
    text-align: center;
    margin-bottom: 100px;
  }
  > div:nth-child(3) {
    display: flex;
    justify-content: space-around;
  }
`;
const AboutTittle = styled.div`
  font-size: 50px;
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: center;
`;

const MoreCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  bottom: 30px;
  align-items: center;
  width: 100%;
`;

const up = keyframes`

50%{
  transform: translate(0,10px);

}
100%{
  display: block;
  opacity: 0.1;  
}
`;

const More = styled.div`
  color: ${(props) => (props.cardClick ? "white" : "black")};
  display: flex;
  flex-direction: column;
  font-size: 20px;
  animation: ${up} 1.5s 0s infinite linear normal;
  animation-timing-function: ease-out;
  cursor: pointer;
`;

export default About;
