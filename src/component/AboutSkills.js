import React from "react";
import styled, { keyframes } from "styled-components";
import html from "../img/html.png";
import css from "../img/css.png";
import javascript from "../img/javascript.png";
import react from "../img/react.png";
import redux from "../img/redux.png";
import { Row, Badge } from "react-bootstrap";

const AboutSkills = () => {
  return (
    <SkillsBox>
      <Row>
        <div>Skills</div>
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
            <div>웹표준을 지키려 노력합니다.</div>
            <div>styled-component를 활용할 수 있습니다.</div>
            <div>keyframe으로 애니메이션 기법을 사용한 경험이 있습니다.</div>
            <div>
              Redux, Redux thunk 상태관리 라이브러리 사용 경험이 있습니다.
            </div>
            <div>ES6 문법에 익숙합니다.</div>
            <div>storybook 작성, 배포 경험이 있습니다.</div>
            <div>figma를 활용하여 레이아웃을 구성할 수 있습니다.</div>
          </div>
        </div>
      </Row>
      <Row>
        <div>Career</div>
        <span>
          <span>
            1. 전자공학 전공
            <br />
            2. Hardware 개발 (6년 7개월)
            <br /> : 회로설계(FPGA, MICOM, Image sensor) 및 디버깅, EMC 인증
            <br />
            <br />
            3. 코드스테이츠...
          </span>
        </span>
      </Row>
    </SkillsBox>
  );
};

const SkillsBox = styled.div`
  background-color: #132743;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  white-space: pre-wrap;

  > div {
    font-size: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffe5b4;
    margin: 2rem;
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

export default AboutSkills;
