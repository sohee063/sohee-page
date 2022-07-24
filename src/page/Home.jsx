import * as S from "./styled";
import { useScrollY } from "../redux/Scroll";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomeTyping from "../component/HomeTyping";

const Home = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let scroll = useScrollY();
  // useEffect(() => {
  //   if (scroll === 1) {
  //     navigate("/work");
  //   }
  // }, [scroll, pathname]);

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

// new TypeIt("#element", {
//   lifeLike: false,
//   speed: 0
// })
// .type("S")
// .pause(120)
// .type("O")
// .pause(272)
// .type("H")
// .pause(147)
// .type("E")
// .pause(270)
// .type("E")
// .pause(630)
// .type(" ")
// .pause(554)
// .type("W")
// .pause(210)
// .type("O")
// .pause(225)
// .type("R")
// .pause(375)
// .type("K")
// .pause(330)
// .type(" ")
// .pause(391)
// .type("S")
// .pause(300)
// .type("P")
// .pause(133)
// .type("A")
// .pause(271)
// .type("C")
// .pause(121)
// .type("E")
// .go();
