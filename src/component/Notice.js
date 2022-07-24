import React from "react";
import styled from "styled-components";
import MassageInput from "./MassageInput";

const Notice = () => {
  const Notice = styled.div`
    border-radius: 10px;
    padding: 20px;
    width: 350px;
    /* background-color: #a6d6d6; */
    background-color: #c9bbcf;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  `;

  return (
    <Notice>
      <MassageInput />
    </Notice>
  );
};

export default Notice;
