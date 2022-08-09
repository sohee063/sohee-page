import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Message from "./Message";
import { Pagination } from "react-bootstrap";

const Messages = ({ setId }) => {
  const { noticeMsg } = useSelector((state) => state.notice);
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);

  //pagination
  let pageBtn = [];
  let total_page = noticeMsg.length;

  // 총 몇 페이지인지
  // 현재 어떤 페이지 보고있는지
  // 페이지 그룹
  // 마지막 페이지
  // 첫번째 페이지
  // 첫번째~마지막까지 페이지 프린트
  let pageGroup = Math.ceil(page / 5);
  let last = pageGroup * 5;
  let first = last - 4;

  const pagination = () => {
    for (let i = first; i <= last; i++) {
      // noticeMsg[i];
      if (!comments) {
        comments.push(noticeMsg[i]);
      }
    }
  };

  const pageClick = (item) => {
    // 1. 이동하고 싶은 페이지를 알아야 함
    // 2. 이동하고 싶은 페이지를 가지고 데이터 가져오기
    setPage(item);
    pagination();
  };

  for (let i = first; i <= last; i++) {
    pageBtn.push(i);
  }

  console.log("msg", comments, noticeMsg);

  return (
    <>
      <MsgBox>
        {comments.map((item, idx) => (
          <Message item={item} key={idx} setId={setId} />
        ))}
      </MsgBox>
      <div>
        {pageBtn.map((item) => (
          <button onClick={() => pageClick(item)}>{item}</button>
        ))}
      </div>
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

export default Messages;
