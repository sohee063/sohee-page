import React from "react";
import styled from "styled-components";
import MassageInput from "./MassageInput";

const Notice = () => {
  return (
    <Board>
      <MassageInput />
    </Board>
  );
};

const Board = styled.div`
  height: 100vh;
  padding: 20px;
  width: 350px;
  background-color: #c9bbcf;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Notice;
