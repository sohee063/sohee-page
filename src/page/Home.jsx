import * as S from "./styled";
import { useScrollY } from "../redux/Scroll";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomeTyping from "../component/HomeTyping";
import React, { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  let scroll = useScrollY();

  useEffect(() => {
    if (scroll) {
      navigate("/work");
    }
  }, [scroll]);

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
