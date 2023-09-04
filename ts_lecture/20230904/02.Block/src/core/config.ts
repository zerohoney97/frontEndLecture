// 제네시스 블록
// 최초 블록은 하드 코딩

import { IBlock } from "./interface/block.interface";

export const GENESIS: IBlock = {
  version: "1.0.0",
  height: 0,
  timestamp: new Date().getTime(),
  hash: "0".repeat(64),
  previousHash: "0".repeat(64),
  merkleRoot: "0".repeat(64),
  // 블록을 채굴할 때 이전 블록 난이도로 마이닝을 한다.
  // 블록의 생성 주기를 검사를 해서 생성주기가 빠르면 블록에 난이도를 상승시키고
  // 블록의 생성 주기가 느리면 블록의 난이도를 하락시킨다.
  difficulty: 0,
  nonce: 0,
  data: ["페페 더 스타트 오브 레전드"],
};
