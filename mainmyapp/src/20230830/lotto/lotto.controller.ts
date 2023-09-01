import LottoService from "./service/lotto.service";

class LottoController {
  constructor(private readonly lottoService: LottoService) {}

  startLotto(type: number) {
   return this.lottoService.lottoServiceDraw(type);
  }
}

export default LottoController;
