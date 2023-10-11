# 토큰

# ERC20 토큰

- ERC는 Ethereum request for Comments의 약자
- ERC 20 에서 20은 특정 제안에 번호를 매긴 토큰의 생성이나 발행등의 규칙을 의미
- 이 숫자는 식별을위한 숫자 큰 의미는 없다.

```sh
# 토큰과 코인의 차이
# 코인은 메인넷이 있고 토큰은 메인넷이 없는것.
# 네트워크 안에 포함되어 있지만 토큰자체의 메인넷이 구현되어 있지 않기 때문에 코인은 아니다.

#ERC20
#ERC20은 이더리움 네트워크에서 가장 표쥰이 되는 토큰, 대체 가능 토큰. 가장 기본적인 상호교환 가능한 토큰이 기능을 정의하고 있다.
#토큰 전송 및 잔액 조회 토큰의 소유자 등을 관리하기위한 메서드와 이벤트가 정의되어있는 토큰. 탈중항돠된 금융 Defi등 사용한다.

#ERC721
#ERC721 대체 불가 토큰을 나타내고
#ERC721 토큰은 각각의 고유한 특성을 가지고 있고 그 토큰의 소유권을 가질수 있는것. 게임 아이템, 미술품, 부동산 등등의 소유권을 나타낼 수 있다.

# 토큰의 소유권 이전, 토큰의 메타데이터 조회등의 메서드와 이벤트를 정의하고 있다.

```

```sh
npm i truffle
npx truffle init

npx creat-react-app main

# 오픈 재플린(프레임 워크)에서 제공하는 ERC20,ERC721 등 표준 토큰을 가지고 상속을 시켜서 토큰을 사용
npm init -y
npm install @openzeppelin/contracts

# 토큰의 량을 확인하려면 networkID필요함(chain ID)도 같은 식별자인데 default값이 설정될수 있어서
# 옵션으로 추가해 보자
npx ganache-cli --chain.chainId 1337 --chain.networkId 1337

# remix 배포및 테스트 환경을 지원하는 웹 IDE

# remix 웹페이지에서 workspace에 우리의 작업 내용 vscode를 가져와서 작업을 실행할 수 있다/
npm install -g @remix-project/remixd
remixd -s . --remix-ide https://remix.ethereum.org
# 버전 관리는 remix 3번째 탭에서
```
