import Block from "@coreChain/block/block";
import { GENESIS } from "@coreChain/config";
import { Failable } from "@coreChain/interface/failable.interface";

class Chain {
  private chain: Block[] = [GENESIS];
  private readonly INTERVAL = 10;

  //   현재 체인을 반환하는 함수
  get() {
    return this.chain;
  }

  //   길이를 반환하는 함수
  length() {
    return this.chain.length;
  }

  //   체인에 마지막 블록 반환 함수
  latestBlock() {
    return this.chain[this.length() - 1];
  }

  //   블룩 추가 메서드
  addToChain(receiveBlock: Block) {
    this.chain.push(receiveBlock);
    return this.latestBlock();
  }

  //   블록을 조회하는 메서드
  getBlock(callbackFn: (block: Block) => boolean) {
    const findBlock = this.chain.find(callbackFn);
    if (!findBlock) {
      throw new Error("찾은 블록이 없음");
    }
    return findBlock;
  }

  //   블록의 높이로 블록을 조회하는 함수
  getBlockByHeight(height: number) {
    return this.getBlock((block: Block) => block.height === height);
  }

  //   블록의 헤시로 찾는 함수
  getBlockByHash(hash: string) {
    return this.getBlock((block: Block) => block.hash === hash);
  }
  //   10번째 블록들을 찾는 함수 현재 위치에서
  getAdjustBlock() {
    const { height } = this.latestBlock();
    const findHeight =
      height < this.INTERVAL
        ? 1
        : Math.floor(height / this.INTERVAL) * this.INTERVAL;
    // 10번째들의 블록의 높이로 블록을 조회해서 블록 반환
    return this.getBlockByHeight(findHeight);
  }
  //   다른 네트워크로 체인을 보낼 때
  serialize() {
    return JSON.stringify(this.chain);
  }

  //   다른 네트워크에서 체인을 받을 때
  deserialize(chunk: string) {
    return JSON.parse(chunk);
  }
  //   상대방 체인과 본인의 체인을 비교
  replaceChain(receiveChain: Block[]): Failable<undefined, string> {
    // 본인의 체인과 상대방의 체인을 검사하는 로직
    // 실제 네트워크에서는 더 복잡한 로직이 들어가 있겠지만 우리는 체인의 길이를 비교하는 로직을 구현할 것
    // 머클루트,해시값,체인 전체검증 등등의 로직이 더 추가되어 있을 건데.
    // 중요한건 체인의 길이를 비교하는 것. 롱기스트 체인 룰

    // 상대방의 체인의 마지막 블록
    const latestReceivedBLock: Block = receiveChain[receiveChain.length - 1];

    // 본인의 마지막 블록
    const latestBlock: Block = this.latestBlock();

    if (latestReceivedBLock.height === 0) {
      return {
        isError: true,
        value: "상대방 네트워크 체인은 마지막 블록이 최초 블록이다",
      };
    }

    if (latestReceivedBLock.height <= latestBlock.height) {
      return {
        isError: true,
        value: "상대방 네트워크 체인과 같거나 더 작다",
      };
    }

    // 상대방의 체인이 내 체인보다 길다는 것
    this.chain = receiveChain;
    return { isError: false, value: undefined };
  }

  // 추가할 블록을 찾으면 네트워크에 브로드 케스트를 하고
  // 다른 네트워크들은 내 체인과 블록을 받아요
  // 블록 검증을 하고
  // 체인검증을 하는데
  // 다른 네트워크의 체인과 내 체인을 비교해서 긴 체인이 정답
  // 다른 네트워크의 체인이 더 길 경우에는 내가 채굴이 늦은 것 (x)
  // 다른 네트워크의 체인보다 길어지면 내가 채굴을 더 빠르게 한거=> 보상(o)

  // 전체 블록 생성 시점에서
  // 이전 -10 번째 블록 구하기
  // 현재 높이가 <10:최초블록을 반환하고
  // 현재 높이가>10:-10번째 블록을 반환
  // 이전 10번째 블록의 생성 시간의 차이를 구해서
  // 그 차이가 블록생성 주기보다 빠르면 난이도를 증가
  // 느리면 난이도 증가
  // 비트코인 기준 생성시간 10분, 10개가 생성되면 100분
  // 100분보다 빠르면 난이도 상승, 느리면 하락

  getAdjustmentBlock() {
    const currentLength = this.length();
    // console.log(currentLength)
    const adjustmentBlock: Block =
      this.length() < this.INTERVAL
        ? GENESIS
        : this.chain[currentLength - this.INTERVAL];
    return adjustmentBlock;
  }
}

export default Chain;
