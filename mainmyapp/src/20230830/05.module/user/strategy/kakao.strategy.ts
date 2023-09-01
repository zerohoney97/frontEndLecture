import { UserParams } from "../interface/login.request";
import { Authenticator, AuththenticationResponse } from "./Authenticatior";

export class KaKaoAuth implements Authenticator {
  async authenticate(
    credientials: UserParams
  ): Promise<AuththenticationResponse> {
    console.log("kakao login success ");
    return { success: true };
  }
}

