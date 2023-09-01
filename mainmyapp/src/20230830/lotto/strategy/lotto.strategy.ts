import { LottoNum } from "../interface/lotto.interface";
import { LottoDraw } from "./Lotto";

interface LottoType {
  [key: string]: LottoDraw;
}

class Strategy {
  private lottoType: LottoType = {};

  //   사실 로또 번호최대개수만 바뀌기 때문에 여기다해줘도 상관없음
  //   lottoDraw(type: number): LottoNum {
  //     const randomNumbers = [];
  //     for (let i = 0; i < type; i++) {
  //       const randomNumber = Math.floor(Math.random() * (45 + 1));
  //       randomNumbers.push(randomNumber);
  //     }
  //     return { num: randomNumbers };
  //   }

  public lottoDrawInStrategy(type: number) {
    console.log(type);
    console.log(this.lottoType);
    return this.lottoType[type].lottoDraw();
  }

  setLottoType(type: number, lottoDraw: LottoDraw) {
    this.lottoType[type] = lottoDraw;
  }
}

export default Strategy;
