function addNoticeMsg(id, name, title, content) {
  return async (dispatch) => {
    try {
      dispatch({
        type: "ADD_MESSAGE",
        payload: {
          id: id,
          name: name,
          title: title,
          content: content,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
}

function deleteNoticeMsg(id) {
  return async (dispatch) => {
    try {
      dispatch({
        type: "DELETE_MESSAGE",
        payload: {
          id: id,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export const noticeAction = { addNoticeMsg, deleteNoticeMsg };
