import React from "react";
import styled, { keyframes } from "styled-components";
import { Row, Badge, Col, Container } from "react-bootstrap";

const Skill = ({ here }) => {
  console.log("나", here);
  return (
    <SkillsBox here={here}>
      <Container>
        <Row lg={12}>
          <Col lg={12}>
            <div>{"<" + "Strength" + ">"}</div>
            <div>
              <Badge pill bg="light" text="dark">
                React
              </Badge>
              <Badge pill bg="light" text="dark">
                Javascript
              </Badge>
              <Badge pill bg="light" text="dark">
                Redux
              </Badge>
              <Badge pill bg="light" text="dark">
                Recoil
              </Badge>
              <Badge pill bg="light" text="dark">
                Styled
              </Badge>
              <Badge pill bg="light" text="dark">
                Axios
              </Badge>
              <div>
                <span>HTML/CSS</span>
                <div>웹표준을 지키려고 노력합니다.</div>
                <div>styled-component를 활용할 수 있습니다.</div>
                <div>
                  keyframe으로 애니메이션 기법을 사용한 경험이 있습니다.
                </div>
                <div>figma를 활용하여 레이아웃을 구성할 수 있습니다.</div>
              </div>
              <div>
                <span>JAVASCRIPT</span>
                <div>ES6 문법에 익숙합니다.</div>
                <div>webpack을 사용하여 배포 경험이 있습니다.</div>
                <div>storybook 작성, 배포 경험이 있습니다.</div>
              </div>
              <div>
                <span>REACT</span>
                <div>
                  다양한 라이브러리를 사용할 수 있고, 가독성이 좋으며 유지보수가
                  간편한 React를 주로 사용합니다.
                </div>
                <div>
                  Redux, Redux thunk, Recoil 상태관리 라이브러리 사용 경험이
                  있습니다.
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row lg={12}>
          <Col lg={12}>
            <div>{"<" + "Career" + ">"}</div>
            <div>
              <div>
                🛠 전자공학 전공
                <br />
                Hardware 개발 업무 (2015.09.21 ~ 2022.04.01 / 6년 7개월)
                <br /> : 산업용/의료용 카메라 개발 (USB3.0, USB2.0, USB3.0 to
                HDMI,Analog, CXP, Camera Link 인터페이스)
                <br /> : 회로설계(FPGA, MICOM, Image Sensor) 및 디버깅, EMC
                인증, 프로젝트 PM
                <br />
                <br />
                개발 업무와 프로젝트 과제 관리를 통해
                <br />
                전반적인 개발 프로세스와 커뮤니케이션 스킬을 다졌습니다.
                <br />
                <br />
                <br />
                <br />
                📒 코드스테이츠 ...... (2022.4.25 ~ 2022.10.19)
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SkillsBox>
  );
};

const SkillsBox = styled.div`
  height: max-content;
  padding-top: 10rem;
  padding-bottom: 10rem;
  display: flex;
  padding: 2rem;
  flex-direction: column;

  @keyframes skill1 {
    0% {
      background-color: #374045;
    }
  }

  @keyframes skill2 {
    0% {
      background-color: #132743;
    }
  }

  animation: ${(props) => {
    if (props.here > 40 && props.here < 72) {
      return "0.6s ease-in-out  skill1";
    } else if (props.here >= 72) {
      return "0.6s ease-in-out  skill2";
    }
  }};
  background-color: ${(props) => {
    if (props.here > 40 && props.here < 72) {
      return "#132743";
    } else if (props.here <= 40) {
      return "#374045";
    } else if (props.here >= 72) {
      return "#C8C2BC";
    }
  }};

  > div > div:first-child,
  > div > div:nth-child(2) {
    font-size: 1.1rem;
    color: white;
    margin-bottom: 10rem;
    > div > div:nth-child(2) > div > :first-child {
      background-color: #a27795;
      border-radius: 15px;
      color: #ffffff;
      display: inline-block;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      margin-top: 2rem;
      padding: 0.7rem;
    }
  }

  > div > div > :first-child > div:first-child,
  > div > div > :nth-child(2) > div:first-child {
    font-size: 4rem;
    align-items: center;
    justify-content: center;
    color: #ffe5b4;
  }

  > div > div > :first-child > div:nth-child(2) > span {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    margin-right: 0.4rem;
  }
`;

export default Skill;
