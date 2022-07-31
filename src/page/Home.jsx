import * as S from "./styled";
import HomeTyping from "../component/HomeTyping";
import React from "react";

const Home = ({ here }) => {
  console.log("here", here);
  return (
    <S.HomeContainer here={here}>
      <S.HomeTitle here={here}>
        <HomeTyping />
      </S.HomeTitle>
      <S.HomeSubTitle here={here}>
        <div>Frontend</div>
      </S.HomeSubTitle>
    </S.HomeContainer>
  );
};

export default Home;
