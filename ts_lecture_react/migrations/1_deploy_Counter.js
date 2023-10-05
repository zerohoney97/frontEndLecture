
// artifacts 컴파일한 내용에서 파일을 찾아서 불러온다.

const Counter = artifacts.require("Counter");
  // deployer 배포 내용이 포함된 객체를 전달받고
  // deploy 메서드가 해당 컴파일된 내용을 네트워크에 배포 진행
module.exports = function(deployer) {
  deployer.deploy(Counter);
};
