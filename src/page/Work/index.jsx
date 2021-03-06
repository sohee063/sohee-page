import React from "react";
import { useState } from "react";
import styled from "styled-components";
import weatherimg from "../../img/weather-app.png";
import { Container, Row, Col } from "react-bootstrap";

const Work = () => {
  const [isSelect, setIsSelect] = useState(false);
  const onClick = () => {
    setIsSelect(!isSelect);
  };
  return (
    <Container>
      <WeatherPage>
        <Row>
          <Col>
            {isSelect ? (
              <div onClick={onClick}>날씨 앱</div>
            ) : (
              <img onClick={onClick} src={weatherimg} />
            )}
          </Col>
        </Row>
      </WeatherPage>
    </Container>
  );
};

const WeatherPage = styled.div`
  transition: 500ms;
  margin-top: 100px;
  padding: 2rem;
  height: 100vh;

  > div {
    color: white;
    width: 500px;
    height: 300px;
    background-color: #2c3333;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }
  > img {
    width: 500px;
    height: 300px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }
  > img:hover {
    transform: scale(1.01);
    transition: 500ms;
  }
`;

export default Work;
