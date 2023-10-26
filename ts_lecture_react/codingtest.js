const nodeNum = 4;
const lineNum = 5;
const startNode = 1000;
let stack = 0;
let arr = [];
const obj = [
  [1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1],
];

const dfs = (obj, n, m) => {
  let temp = false;
  console.log(n,m)
  if (obj[n + 1][m] === 1 && n !== obj.length - 1) {
    const temp2 = dfs(obj, n + 1, m);
    stack += 1;
    temp = true;
    if (temp2 === 0) {
      stack -= 1;
    }
  }
  if (obj[n][m + 1] === 1 && m !== obj[0].length - 1) {
    const temp2 = dfs(obj, n, m + 1);

    stack += 1;
    temp = true;
    if (temp2 === 0) {
      stack -= 1;
    }
  }
  if (obj[n - 1][m] === 1 && n !== 0) {
    const temp2 = dfs(obj, n - 1, m);
    stack += 1;

    temp = true;
    if (temp2 === 0) {
      stack -= 1;
    }
  }
  if (obj[n][m - 1] === 1 && m !== 0) {
    const temp2 = dfs(obj, m - 1);
    stack += 1;

    temp = true;
    if (temp2 === 0) {
      stack -= 1;
    }
  }

  if (n === obj.length - 1 && m === obj[0].length - 1) {
    stack += 1;
    temp = true;
  }

  if (temp) {
    return 1;
  } else {
    return 0;
  }
};

dfs(obj, 0, 0);
console.log(stack);
