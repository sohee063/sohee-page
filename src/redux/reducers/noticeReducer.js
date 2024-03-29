let initialState = {
  noticeMsg: [
    {
      id: 1,
      name: "sohee",
      title: "안녕하세요. 김소희입니다",
      content:
        "하드웨어 개발자에서 프론트엔드 개발자로 전향하기 위해 열심히 달려가는 중입니다. 👶🏻",
    },
  ],
};

function noticeReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        noticeMsg: [
          ...state.noticeMsg,
          {
            id: payload.id,
            name: payload.name,
            title: payload.title,
            content: payload.content,
          },
        ],
      };
    case "DELETE_MESSAGE":
      return {
        ...state,
        noticeMsg: state.noticeMsg.filter((msg) => msg.id !== payload.id),
      };
    default:
      return { ...state };
  }
}

export default noticeReducer;
