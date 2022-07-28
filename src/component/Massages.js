import React, { useState, useEffect } from "react";
import Massage from "./Massage";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Pagination } from "react-bootstrap";

const Massages = ({ setId }) => {
  const { noticeMsg } = useSelector((state) => state.notice);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const pageNum = [];

  for (let i = 1; i < Math.ceil(noticeMsg.length / 5); i++) {
    pageNum.push(i);
    console.log("나야", pageNum);
  }

  useEffect(() => {
    setStart((currentPage - 1) * 5);
    setEnd(currentPage * 5);
  }, [currentPage]);

  // 페이지네이션

  return (
    <>
      <MsgBox>
        <div>
          {pageNum.map((num) => (
            <li key={num} onClick={() => setCurrentPage(num)}>
              <button>{num}</button>
            </li>
          ))}
        </div>
        {noticeMsg.map((item, idx) => (
          <Massage item={item} key={idx} setId={setId} />
        ))}
      </MsgBox>
    </>
  );
};

const MsgBox = styled.div`
  > div {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 300px;
    background-color: tomato;
    border-radius: 10px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;

export default Massages;
