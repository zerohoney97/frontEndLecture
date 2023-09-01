// 응답 정보 객체의 구조 정의

import { UserParams } from "../interface/login.request";

export interface AuththenticationResponse {
  success: boolean;
  // msessage:옵셔닝 키가 있어도 되고 없어도 되는 구조
  message?: string;
}

export interface Authenticator {
  // 로그인 검증을 할 함수 선언
  authenticate(credientials: UserParams): Promise<AuththenticationResponse>;
}
