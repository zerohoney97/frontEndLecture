import Strategy from "../strategy/lotto.strategy";

class LottoService {
  constructor(private readonly lottoStrategy: Strategy) {}

  lottoServiceDraw(type: number) {
    return this.lottoStrategy.lottoDrawInStrategy(type);
  }
}

export default LottoService;
