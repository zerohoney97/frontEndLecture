import { UserParams } from "../interface/login.request";
import {
  Authenticator,
  AuththenticationResponse,
} from "../strategy/Authenticatior";

// 전략 패턴 객체 구조 정의
interface IStrategy {
  // key 문자열로 지정
  // key가 동적으로 추가될 수 있다.
  [key: string]: Authenticator;
}

// 서비스 로직들을 가질 객체 구조 정의
class Strategy {
  private strategy: IStrategy = {};
  //   서비스 로직을 객체에 추가할 함수
  public setStrategy(key: string, authenticate: Authenticator) {
    this.strategy[key] = authenticate;
  }
  public async login(
    type: string,
    credientials: UserParams
  ): Promise<AuththenticationResponse> {
    const result = await this.strategy[type].authenticate(credientials);
    return result;
  }
}

export default Strategy;
