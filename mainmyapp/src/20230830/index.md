# typeScript란?

### javascript에서 타입 검사가 확장된 추가된 언어이다.

<br/>

## javaScript에 타입이 확장됨

<br/>
<br/>

### typeScript는 javascript의 상위 집합 슈퍼셋(상위 확장) 대형 프로젝트를 진행할 때 오류 검사가 쉽다.

### typeScript 객체지향 프로그래밍에 특화된 프로그래밍 패턴을 지원하는데

### 함수형 프로그래밍이 대세라서 타입검사나 추론등의 기능을 사용할 예정

<br/>

### typeScript를 쓰면 javaScript로 작업할 때마다 개발에서 생기는 에러를 사전에 방지할 수 있고 javaScript코드의 품질과 개발 생산성을 높일 수 있다.

<br/>

### typeScript는 런타임이 존재하지 않는다.

- 컴파일러가 존재 (컴파일 언어)
- typeScript => javaScript

<br/>

## 가이드

-javaScript는 타입이 정해져 있지 않아서 자동완성이 미리 뜨지않고 일일히
어떤 값이 있는지 확인하면서 타이핑 해야하는데
-typeScript는 별칭을 통해서 자동완성 및 작성이 편하고 미리 에러를 방지할 수 있어 정확하게 작업할 수 있다.

- typeScript로 작성한 코드를 브라우저가 해석할 수 있는 javaScript
  코드로 변환해서 사용(컴파일)

# typeScript 설치

```sh
# pacakge.json 초기화
npm init -y
# 개발 단계에서 사용 -D=>--save-dev
npm install -d typescript

```

```sh
# 설치 되었는지 버전 확인
npx tsc --version

```

## typeScript의 컴파일 과정 옵션을 설정 할 수 있는 파일

- tscconfig.json

```sh
# tsconfig.json 생성 명령어
npx tsc --init

# 잔소리 꾼 설정된 하위 경로에 규칙이 맞지않는 구문을 발견하면 오류를 띄움

```

### node 환경에서 실행 시켜볼 수 있나?

ts-node사용 개발환경에서 typeScript로 작성된 코드를 실행 시켜볼 수 있다.
기존 javaScript는 node를 통해 실행 시켰는데
typeScipt는 node가 해석을 못함=> ts-node로 실행 시켜줘야 한다.

ts-node typeScript 실행 환경 (typeScript를 javaScript로 컴파일해서 실행 필요 없이
node 환경에서 실행 가능)

1.typeScript를 컴파일 내부 컴파일러를 통해 메모리 상에 javaScript 코드로 변환
javaScript 파일을 만들지 않는다.

2.컴파일된 javaScript 코드를 nodeJs 런타임 환경으로 실행 그 다음 코드 실행결과를 출력
(타입 검사로 코드에서 발생할 오류를 미리 또 알려줌)

설치 명령어

node.js는 javascript 런타임 환경인데 내장 함수 및 모듈에 대한 타입 정보가 필요한데
그래서 node.js 타입 정보를 패키지로 설치해서 사용하자
@type/node

```sh
 npm install ts-node @types/node

```

## 실행 가이드

type-script=> ts-node
npx ts-node app.ts

### pacakge.json에 추가
```sh

"scripts":{
    "build":"tsc"
}

```
tsc 명령어는 tyupescript 컴파일을 실행 하는 명령어
typescript 코드를 tsconfig.json 파일 설정값을 가지고 javascript 코드로 변환해준다.