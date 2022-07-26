import React from "react";
import styled from "styled-components";
import MassageInput from "./MassageInput";

const Notice = () => {
  const Notice = styled.div`
    border-radius: 10px;
    padding: 20px;
    width: 350px;
    /* height: 0%; */
    /* background-color: #a6d6d6; */
    background-color: #c9bbcf;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  return (
    <Notice>
      <MassageInput />
    </Notice>
  );
};

export default Notice;
