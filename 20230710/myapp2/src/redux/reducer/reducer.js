const userInfo = {
  userId: "",
  userPw: "",
  userNickName: "",
};

const order=[];

const userInfoReducer = (state = userInfo, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userId: action.payload.userId,
        userPw: action.payload.userPw,
        userNickName: action.payload.userNickName,
      };
    default:
      return { ...state };
  }
};

const orderReducer = (state = order, action) => {
        console.log(state)
        switch (action.type) {
    case "ORDER":
      if (state === 0) {
        console.log('빈배열')
        return [
          { foodName: action.payload.foodName, date: action.payload.date },
        ];
      } else {

        return [
          ...state,
          { foodName: action.payload.foodName, date: action.payload.date },
        ];
      }

    default:
      return [...state];
  }
};

export { userInfoReducer, orderReducer };
