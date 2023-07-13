import axios from "axios";

const getBoadData = () => {
  return async (dispatch) => {
    const boardData = await axios.get(
      "http://localhost:8080/board/getAllBoards",
      { withCredentials: true }
    );
    console.log(boardData);
    if (boardData.data === "expired") {
      console.log(boardData.data === "expired");
      dispatch({ type: "EXPIRED", payload: null });
    } else {
      const newState = boardData.data.map((el) => {
        const { id, title, content, date } = el;
        return { id, title, content, date, writer: el.User.user_nickname };
      });
      dispatch({ type: "GETBOARD", payload: newState });
    }
  };
};

const boardMiddleWareFunction = {
  getBoadData,
};

export default boardMiddleWareFunction;
