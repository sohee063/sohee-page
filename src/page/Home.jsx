import * as S from "./styled";
import { useScrollY } from "../redux/Scroll";
import { useNavigate } from "react-router-dom";
import HomeTyping from "../component/HomeTyping";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <S.HomeContainer>
      <S.HomeTitle>
        <HomeTyping />
      </S.HomeTitle>
      <S.HomeSubTitle>
        <div>Frontend</div>
      </S.HomeSubTitle>
    </S.HomeContainer>
  );
};

export default Home;
