import { UserParams } from "../interface/login.request";
import { Authenticator, AuththenticationResponse } from "./Authenticatior";

// 로그인 검증 객체 구조 상속
export class GoogleAuth implements Authenticator {
  async authenticate(
    credientials: UserParams
  ): Promise<AuththenticationResponse> {
    // 구글 로그인 로직 작성
    console.log(credientials);
    console.log("google login success");
    return { success: true };
  }
}
