// 화살표 함수 ES6문법
const test = (msg) => {
  const arr = [1, 2, 3];
  const arr2 = [4, 5, 6];

  const arr3 = [...arr, ...arr2];
  //   템플릿 리터럴 ES6
  console.log(...arr3, msg);
};

test('문자 ㄱㄱ')