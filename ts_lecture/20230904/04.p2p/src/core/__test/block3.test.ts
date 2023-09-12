// 테스트 코드를 작성하면 시간이 오래걸리지만
// 코드의 품질을 좀 더 올릴 수 있다.
//  단위별로 테스트를 진행해서 디버깅을 하고 코드를 작성할 수 있기 때문에

// 1단계 코드를 2단계 코드를 실행하고 설치적으로 테스트를 우리가 진행을 해볼수가 있다.

import Block from "@coreP2P/block/block";
import { GENESIS } from "@coreP2P/config";
import Chain from "@coreP2P/block/chain";
//describe:테스트 들의 그룹화 그룹을 지정할 수 있다.
// 첫번째는 그룹의 명 이름, 어떤 테스트 그룹인지
// 두번째 매개변수로 테스트 들을 실행시키는 콜백함수
// describe("block 테스트 코드 그룹", () => {
// 하나의 테스트 단위, 첫번째 매개변수에는 테스트 이름 명
// 두번째 매개변수는 테스트의 도앚ㄱ을 가지고있는 콜백함수
//   it("제네시스 블록 테스트", () => {
//     console.log(GENESIS);
//   });
// });

describe("block검증", () => {
  let newBlock: Block;
  let newBlock2: Block;
  let newChain: Chain;
  let newChain2: Chain;
  it("블록 추가", () => {
    const data = ["임시 페페1"];
    newBlock = Block.generateBlock(GENESIS, data, GENESIS);
    // 블록의 난이도에 따른 마이닝을 동작해서
    // 조건에 맞을 때 까지 연산을 반복한 뒤에 생성된 블록을 newBlock에 받아온다.
    // 이전 블록은 GENESIS
    const data2 = ["임시 페페 2"];
    newBlock2 = Block.generateBlock(newBlock, data2, GENESIS);
  });

  it("블록 유효성 검증", () => {
    const isValidBlock = Block.isValidNewBlock(newBlock, GENESIS);
    if (isValidBlock.isError) {
      // expect: toBe:값이 맞는지 확인할 때
      // 성공한 결과가 맞는지 확인할 때 사용하는 코드
      // true false비교해서 맞는지 확인
      return expect(true).toBe(false);
    }
    expect(isValidBlock.isError).toBe(false);
  });

  it("블록 체인 추가", () => {
    newChain = new Chain();
    newChain.addToChain(newBlock);
    console.log(newChain.get());
    // console.log(newChain.getBlockByHash(newBlock.hash));
  });

  it("네트워크 체인 비교(롱기스트 체인 룰)", () => {
    newChain2 = new Chain();
    newChain2.replaceChain(newChain.get());
    // console.log(newChain2.get());
  });

  it("이전 10번째 블록 or 최초 블록", () => {
    // 현재 블록을 생성한다 가정하고
    // 현재 블록이 생성된 시간이 이전10번쨰 블록으로부터 얼마나 걸렸는지
    // 확인을 하고 블록의 정해진 생성 주기보다 빠르면 난이도를 올리고 아니면 내린다.
    for (let i = 0; i < 80; i++) {
    console.log(newChain.getAdjustmentBlock());
    let block = Block.generateBlock(
        newChain.latestBlock(),
        [`block`],
        newChain.getAdjustmentBlock()
      );
      newChain.addToChain(block);
    }
    // console.log(newChain.getAdjustmentBlock());
  });
});
