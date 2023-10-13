const nodeNum = 4;
const lineNum = 5;
const startNode = 1000;
let arr = [];
const obj = {
  999: [1000],
  1000: [999],
};


const dfs = (startNode, obj) => {
  arr.push(startNode);

  for (let node of obj[startNode]) {
    if (!arr.includes(node)) {
      dfs(node, obj);
    }
  }
};

dfs(startNode, obj, arr);
console.log(arr);
