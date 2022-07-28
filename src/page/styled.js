import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  background-color: #374045;
  @keyframes loadEffect2 {
    0% {
      background-color: #f0ebe3;
    }
    100% {
      background-color: #374045;
    }
  }
  animation: ${(props) => (props.here ? "0.6s ease-in-out loadEffect2" : "")};
  background-color: ${(props) => (props.here ? "#374045" : "#f0ebe3")};
`;

export const HomeTitle = styled.div`
  @media screen and (max-width: 768px) {
    font-size: 10rem;
    transition: 500ms;
  }

  @media screen and (max-width: 600px) {
    font-size: 8rem;
    line-height: 6rem;
    transition: 500ms;
  }

  @media screen and (max-width: 500px) {
    font-size: 7rem;
    line-height: 5rem;
    transition: 500ms;
  }

  @media screen and (max-width: 300px) {
    font-size: 3rem;
    line-height: 2rem;
    transition: 500ms;
    padding: 10px;
  }

  font-family: "DM Serif Display", serif;
  white-space: pre-wrap;
  text-align: center;
  font-weight: 1000;
  font-size: 11rem;
  /* color: #576f72; */
  color: ${(props) => (props.here ? "#f0ebe3" : "#576f72")};
  line-height: 8rem;
  text-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const HomeSubTitle = styled.div`
  font-size: 15px;
  text-align: center;
  color: ${(props) => (props.here ? "#f0ebe3" : "#576f72")};
  text-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
`;
