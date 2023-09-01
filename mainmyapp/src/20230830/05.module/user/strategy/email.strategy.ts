import { UserParams } from "../interface/login.request";

import { Authenticator, AuththenticationResponse } from "./Authenticatior";

// 이메일 로그인 검증 클래스 정의
export class EmailAuth implements Authenticator {
  async authenticate(
    credientials: UserParams
  ): Promise<AuththenticationResponse> {
    console.log("email login success");
    return { success: true };
  }
}
