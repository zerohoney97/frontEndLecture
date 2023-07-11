let init = {
  weatherData: {},
};

function reducer(state = init, action) {
  const { type, payload } = action;
  console.log('asd')
  switch (type) {
    case "GET_WHEATER":
      return { ...state, weatherData: payload };

    default:
      return state;
  }
}

export default reducer;
