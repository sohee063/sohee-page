import * as S from "./styled";
import { useScrollY } from "../Scroll";
import { useNavigate } from "react-router-dom";
import HomeTyping from "../component/HomeTyping";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Home = ({ here }) => {
  return (
    <S.HomeContainer here={here}>
      <S.HomeTitle here={here}>
        <HomeTyping />
      </S.HomeTitle>
      <S.HomeSubTitle>
        <div>Frontend</div>
      </S.HomeSubTitle>
    </S.HomeContainer>
  );
};

export default Home;
