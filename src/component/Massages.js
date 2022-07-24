import React from "react";
import Massage from "./Massage";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Massages = ({ setId }) => {
  const { noticeMsg } = useSelector((state) => state.notice);
  return (
    <MsgBox>
      {noticeMsg.map((item, idx) => (
        <Massage item={item} key={idx} setId={setId} />
      ))}
    </MsgBox>
  );
};

const MsgBox = styled.div`
  > div {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 300px;
    background-color: tomato;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.2) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.1) 0px 18px 36px -18px inset;
  }
`;

export default Massages;
