import { LottoNum } from "../interface/lotto.interface";
import { LottoDraw } from "./Lotto";

class SixLotto implements LottoDraw {
  lottoDraw(): LottoNum {
    const randomNumbers = [];
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * (45 + 1));
      randomNumbers.push(randomNumber);
    }
    return { num: randomNumbers, whatMax: 6 };
  }
}

export default SixLotto;
