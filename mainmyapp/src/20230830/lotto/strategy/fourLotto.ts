import { LottoNum } from "../interface/lotto.interface";
import { LottoDraw } from "./Lotto";

class FourLotto implements LottoDraw {
  lottoDraw(): LottoNum {
    const randomNumbers = [];
    for (let i = 0; i < 4; i++) {
      const randomNumber = Math.floor(Math.random() * (45 + 1));
      randomNumbers.push(randomNumber);
    }
    return { num: randomNumbers, whatMax: 4 };
  }
}
export default FourLotto;
