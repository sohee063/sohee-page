import React from "react";
import styled, { keyframes } from "styled-components";
import { Row, Badge } from "react-bootstrap";
import star from "../img/star.png";

const Skill = ({ here }) => {
  console.log("나", here);
  return (
    <SkillsBox here={here}>
      <Row lg={12}>
        <div>{"<" + "Skills" + ">"}</div>
        <div>
          <div>
            <span>
              <Badge pill bg="light" text="dark">
                HTML
              </Badge>
            </span>
            <span>
              <Badge pill bg="light" text="dark">
                CSS
              </Badge>
            </span>
            <span>
              <Badge pill bg="light" text="dark">
                javascript
              </Badge>
            </span>
            <span>
              <Badge pill bg="light" text="dark">
                React
              </Badge>
            </span>
            <span>
              <Badge pill bg="light" text="dark">
                Redux
              </Badge>
            </span>
            <span>
              <Badge pill bg="light" text="dark">
                Styled
              </Badge>
            </span>
          </div>

          <div>
            <div>styled-component를 활용할 수 있습니다.</div>
            <div>keyframe으로 애니메이션 기법을 사용한 경험이 있습니다.</div>
            <div>
              Redux, Redux thunk 상태관리 라이브러리 사용 경험이 있습니다.
            </div>
            <div>storybook 작성, 배포 경험이 있습니다.</div>
            <div>figma를 활용하여 레이아웃을 구성할 수 있습니다.</div>
          </div>
        </div>
      </Row>
      <Row lg={12}>
        <div>{"<" + "Career" + ">"}</div>
        <span>
          <span>
            🛠 전자공학 전공
            <br />
            Hardware 개발 업무 (2015.09.21 ~ 2022.04.01 / 6년 7개월)
            <br /> : 회로설계(FPGA, MICOM, Image sensor) 및 디버깅, EMC 인증
            <br />
            <br />
            전반적인 개발 업무와 프로젝트 과제 관리를 통해
            <br />
            문재 해결 능력과 업무 커뮤니케이션 스킬을 다졌습니다.
            <br />
            <br />
            📒 코드스테이츠 ...... (2022.4.25 ~ 2022.10.19)
          </span>
        </span>
      </Row>
    </SkillsBox>
  );
};

const SkillsBox = styled.div`
  height: 100vh;
  display: flex;
  padding: 2rem;
  flex-direction: column;

  @keyframes loadEffect4 {
    0% {
      background-color: #374045;
    }
  }

  @keyframes loadEffect5 {
    0% {
      background-color: #132743;
    }
  }

  animation: ${(props) => {
    if (props.here > 45 && props.here < 85) {
      return "0.6s ease-in-out  loadEffect4";
    } else if (props.here >= 85) {
      return "0.6s ease-in-out  loadEffect5";
    }
  }};
  background-color: ${(props) => {
    if (props.here > 45 && props.here < 85) {
      return "#132743";
    } else if (props.here <= 45) {
      return "#374045";
    } else if (props.here >= 85) {
      return "#970747";
    }
  }};

  > div {
    font-size: 4rem;
    align-items: center;
    justify-content: center;
    color: #ffe5b4;
    padding: 2rem;
  }
  > div:nth-child(1) {
    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      > div:first-child {
        font-size: 2rem;
        > span * {
          margin-right: 1rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
  > div:nth-child(2) {
    text-align: right;
  }

  > div:nth-child(1) > :nth-child(2) > div {
    color: white;
    font-size: 1.2rem;
  }

  > div:nth-child(2) > span {
    font-size: 1.2rem;
    color: white;
  }
`;

export default Skill;
