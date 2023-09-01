import UserService from "./service/user.service";
import { EmailAuth } from "./strategy/email.strategy";
import { KaKaoAuth } from "./strategy/kakao.strategy";
import { GoogleAuth } from "./strategy/google.strategy";
import Strategy from "./strategy/strategy";
import UserController from "./user.controller";

// 전략패턴 객체 생성
const strategy = new Strategy();

strategy.setStrategy("email", new EmailAuth());
strategy.setStrategy("kakao", new KaKaoAuth());
strategy.setStrategy("google", new GoogleAuth());

// 완겅된 객체를 유저 서비스 클래스 생성자의 매개변수로 전달 및 유저 서비스 객체 생성
const userService = new UserService(strategy);
// 유저 로그인 로직 클래스 생성 및 유저 서비스 로직 객체 생성자 매개변수로 전달

const userController = new UserController(userService);

userController.signIn("email");
