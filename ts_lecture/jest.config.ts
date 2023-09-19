import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  // 1.모듈 파일 확장자 설정: typescript와 javascript 둘 다 테스트 파일로 지정
  moduleFileExtensions: ["ts", "js"],
  //   2.테스트 파일 매치 설정: 파일의 이름의 패턴을 설정
  //  루트 경로에서 모든 폴더에 모든 파일 이름의 패턴이 test.js or test.ts
  testMatch: ["<rootDir>/**/block5.test.(js|ts)"],
  // 3.모듈의 이름에 대한 별칭 설정:@core
  //   뱔칭으로 지정된 @core를 어떻게 경로를 바꿔줄거냐
  // ^@core==@core/**/* 시작하는 별칭은 루트 경로에 src/core의 경로까지

  moduleNameMapper: {
    // rootDir는 ts_lecture
    "^@core/(.*)$": "<rootDir>/20230904/02.Block/src/core/$1",
    "^@coreChain/(.*)$": "<rootDir>/20230904/03.chain/src/core/$1",
    "^@coreP2P/(.*)$": "<rootDir>/20230904/04.p2p/src/core/$1",
    "@coreWallet/(.*)$": "<rootDir>/20230904/05.wallet/src/core/$1",
    "@coreTransaction/(.*)$": "<rootDir>/20230904/06.transaction/src/core/$1",
    
  },

  //   4.테스트 환경 설정:node환경에서 실행 시킬거임
  testEnvironment: "node",
  // 5.자세한 로그 설정 출력: 터미널에 로그들을 더 자세히 출력할지 여부
  verbose: true,
  // 6.프리셋 설정:typescript 에서 사용랄 jest/ts-jest설정
  preset: "ts-jest",
};
export default config;
