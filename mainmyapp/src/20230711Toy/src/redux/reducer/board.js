let boardArr = [
 
];

const reducer = (state = boardArr, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GETBOARD":
      return [ ...payload];
    case "EXPIRED":
      return 'expired'
    default:
      return state;
  }
};

export default reducer;
