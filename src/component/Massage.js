import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { noticeAction } from "../redux/actions/noticeAction";

const Massage = ({ item }) => {
  const [isClick, setIsclick] = useState(false);
  const dispatch = useDispatch();
  const { noticeMsg } = useSelector((state) => state.notice);
  const onClick = () => {
    setIsclick(!isClick);
  };
  const deleteMsg = (key) => {
    dispatch(noticeAction.deleteNoticeMsg(key));
  };
  return (
    <>
      {isClick ? (
        <>
          <MsgClick onClick={onClick}>
            <div>
              <div>{item.title}</div>
              <div>
                <div>{item.name}</div>
                <div onClick={() => deleteMsg(item.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>

            <div>
              <span>{item.content}</span>
            </div>
          </MsgClick>
        </>
      ) : (
        <Msg onClick={onClick}>
          <div>{item.title}</div>
          <div>
            <div>{item.name}</div>
            <div onClick={() => deleteMsg(item.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        </Msg>
      )}
    </>
  );
};

const Msg = styled.div`
  color: white;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  justify-content: space-between;

  div {
    margin: 10px;
  }

  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    > div:nth-child(1) {
      margin: 10px;
    }
  }
  > div:nth-child(2) {
    display: flex;
  }
`;

const MsgClick = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div:nth-child(1) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      margin: 10px;
    }
    > div:nth-child(2) {
      display: flex;
      justify-content: center;
    }
  }

  > div:nth-child(2) {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;

    > span,
    button {
      margin: 10px;
    }
  }
`;
export default Massage;
