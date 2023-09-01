import { UserParams } from "../interface/login.request";
import { AuththenticationResponse } from "../strategy/Authenticatior";
import Strategy from "../strategy/strategy";
// 유저의 서비스 로직 클래스 정의
class UserService {
  // 전략패턴 유저 로그인 서비스 로직 객체
  // 이메일 ,카카오 ,구글 세가지 로그인 로직 사용할 것
  constructor(private readonly strategy: Strategy) {}

  async login(
    type: string,
    credientials: UserParams
  ): Promise<AuththenticationResponse> {
    // google,{email,password}
    const result = await this.strategy.login(type, credientials);
    return result;
  }
}

export default UserService;
