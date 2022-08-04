import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./page/Main";
import Navigation from "./component/Navigation";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "./GlobalStyle";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className={loading ? "apploading" : "app"}>
        {loading ? (
          <>
            {/* <PuffLoader color="#2C3333" loading={loading} size={150} /> */}
            {/* <Star src="https://cdn.dribbble.com/users/1541584/screenshots/5494057/magic.gif" /> */}
            {/* <Loading light={light}> */}
            {/* {light ? (
                <img
                  src={on}
                  style={{
                    filter: "drop-shadow(0px 0px 100px #FFD700)",
                  }}
                />
              ) : (
                <img src={off} />
              )} */}
            {/* </Loading> */}
            <Loading>
              <div></div>
            </Loading>
          </>
        ) : (
          <>
            <Navbar>
              <Navigation />
            </Navbar>
            <Main />
          </>
        )}
      </div>
    </>
  );
}

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 1rem;
  z-index: 1;
`;

// const Loading = styled.div`
//   height: 100vh;
//   width: 100%;
//   font-size: 10rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) => (props.light ? "#141829" : "#141829")};
//   > img {
//     width: 10rem;
//     height: 10rem;
//   }
// `;

const slide = keyframes`
   10% {
    transform: translateY(100%);
    background-color: #f0ebe3; 
  } 
  100%{
    transform: translateY(0%);
    background-color: #f0ebe3;
    }
`;

const Loading = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #141829;
  > div {
    height: 100vh;
    width: 100%;
    animation: ${slide} 1.92s 0.1s ease-in-out alternate;
  }
`;

const turning = keyframes`
0%{

  transform: rotate(0deg);
}

40%{
  transform: rotate(-90deg);

}
70% {
  opacity: 0.1;  
  transform: rotate(-360deg);
}
90% {
  display: block;
  transform: rotate(0deg);
}
100%{
}
`;

const Star = styled.img`
  position: absolute;
  width: 30%;
  animation: ${turning} 3s 0s infinite linear normal;
  animation-timing-function: ease-out;
`;

export default App;
