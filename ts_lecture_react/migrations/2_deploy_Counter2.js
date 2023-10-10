// 빌드 폴더안에 컴파일된 Counter2.json을 가져온다.
const Counter2 = artifacts.require("Counter2");

module.exports = (deployer) => {
  // deployer.deploy 메서드로
  // 가져온 파일을 배포 진행
  deployer.deploy(Counter2);
};
