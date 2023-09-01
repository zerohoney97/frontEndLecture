import { UserParams } from "./interface/login.request";
import UserService from "./service/user.service";

// 사용자 서비스 로직 클래스 정의
class UserController {
  constructor(private readonly userService: UserService) {}
  // /login/:type
  // 위 경로로 왔을때
  signIn(type: string) {
    // req.body 유저의 정보를 받아오고
    // 임시 객체
    const loginParams: UserParams = {
      email: "2coco97@gmail.com",
      password: "1234",
    };
    this.userService.login(type, loginParams);
  }
  //   회원가입 로직도 여기
  signup() {
    // ....
  }
}
export default UserController;
