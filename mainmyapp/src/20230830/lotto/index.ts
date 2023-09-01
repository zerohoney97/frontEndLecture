// 타입 스크립트로 로또 번호 추첨기 전략 패턴
// 로또 번호인데 4개의 번호를 뽑는 로직이 있고
// 6개의 번호를 뽑는 로직,8개도 있다
// 추가 작업이 들어오면 로또 번호를 12개 더 뽑을 수 있다.(하나의 클래스 추가시 가능하도록)

import LottoController from "./lotto.controller";
import LottoService from "./service/lotto.service";
import EightLotto from "./strategy/eightLotto";
import FourLotto from "./strategy/fourLotto";
import Strategy from "./strategy/lotto.strategy";
import SixLotto from "./strategy/sixLotto";

const lotto = new Strategy();

lotto.setLottoType(4, new FourLotto());
lotto.setLottoType(6, new SixLotto());
lotto.setLottoType(8, new EightLotto());

const lottoService = new LottoService(lotto);

const lottoController = new LottoController(lottoService);

console.log(lottoController.startLotto(4));
