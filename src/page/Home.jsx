import * as S from "./styled";
import HomeTyping from "../component/HomeTyping";
import React from "react";
import { motion } from "framer-motion";

const Home = ({ here }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <S.HomeContainer here={here}>
        <S.HomeTitle here={here}>
          <HomeTyping />
        </S.HomeTitle>
        <S.HomeSubTitle here={here}>
          <div>Frontend</div>
        </S.HomeSubTitle>
      </S.HomeContainer>
    </motion.div>
  );
};

export default Home;
