import {
  EmailAuthenticator,
  Login,
  AuthProps,
  kakaoAuthenticator,
  LoginService,
} from "./Authentication";

interface IEmailSender {
  sendEmail(email: string): void;
}

class EmailSender implements IEmailSender {
  sendEmail(email: string): void {}
}

export interface Strategy {
  email: EmailAuthenticator;
  kakao: kakaoAuthenticator;
}

class Auth {
  constructor(
    private readonly authProps: AuthProps,
    private readonly emailSender: EmailSender,
    private readonly loginService: LoginService
  ) {}

  public async login() {
    console.log(this);
    await this.loginService.login("kakao", this.authProps);
  }
  //   이메일 인증 처리 구조
  public register(): void {
    this.emailSender.sendEmail(this.authProps.email);
  }
}

// 유저의 이메일과 패스워드 임시 객체
const authProps: AuthProps = { email: "2coco97@gmail.com", password: "1234" };
const _emailSender = new EmailSender();

// 이메일 로그인 로직 클래스 동적 할당
const _email = new EmailAuthenticator();

// 카카오 로그인 로직 클래스 동적할당
const _kakao = new kakaoAuthenticator();

// 로그인 서비스 로직을 가지고 있는 객체 Strategy 인터페이스 사용
const _strategy: Strategy = {
  email: _email,
  kakao: _kakao,
};

const _loginService = new Login(_strategy);

const auth = new Auth(authProps, _emailSender, _loginService);

auth.login();
