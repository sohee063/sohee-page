import React, { useState } from "react";
import { noticeAction } from "../redux/actions/noticeAction";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Massages from "./Massages";

const MassageInput = () => {
  const [id, setId] = useState("2");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const inputName = (e) => {
    setName(e.target.value);
  };
  const inputTitle = (e) => {
    setTitle(e.target.value);
  };
  const inputContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setId(Math.floor(Math.random() * 10000));
    dispatch(noticeAction.addNoticeMsg(id, name, title, content));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Tittle>소통해요! 🖐</Tittle>
        <InputBox>
          <div>
            <label for="name">name</label>
            <input
              id="name"
              onChange={inputName}
              type="text"
              placeholder="name"
            />
          </div>
          <div>
            <label for="title">title</label>
            <input
              id="title"
              onChange={inputTitle}
              type="text"
              placeholder="title"
            />
          </div>
          <div>
            <label for="content">content</label>
            <textarea
              id="content"
              onChange={inputContent}
              type="text"
              placeholder="content"
            />
          </div>
          <button>등록</button>
        </InputBox>
      </form>
      <Massages setId={setId} />
    </>
  );
};

const InputBox = styled.div`
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 30px;
  width: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.3) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.1) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.1) 0px -2px 6px 0px inset;

  > div {
    display: flex;
    flex-direction: column;
  }
  > button {
    margin: 10px;
  }
`;

const Tittle = styled.div`
  font-size: 25px;
  color: beige;
  margin: 20px;
  text-align: center;
`;

export default MassageInput;
