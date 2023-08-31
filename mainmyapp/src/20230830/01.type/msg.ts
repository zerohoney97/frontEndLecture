const msg: string = "javascript";
console.log(msg);

// node 환경에서 실행 시켜볼 수 있나?

// ts-node사용 개발환경에서 typeScript로 작성된 코드를 실행 시켜볼 수 있다.
// 기존 javaScript는 node를 통해 실행 시켰는데
// typeScipt는 node가 해석을 못함=> ts-node로 실행 시켜줘야 한다.

// ts-node typeScript 실행 환경 (typeScript를 javaScript로 컴파일해서 실행 필요 없이
// node 환경에서 실행 가능)

// 1.typeScript를 컴파일 내부 컴파일러를 통해 메모리 상에 javaScript 코드로 변환
// javaScript 파일을 만들지 않는다.

// 2.컴파일된 javaScript 코드를 nodeJs 런타임 환경으로 실행 그 다음 코드 실행결과를 출력
// (타입 검사로 코드에서 발생할 오류를 미리 또 알려줌)

// 설치 명령어

// node.js는 javascript 런타임 환경인데 내장 함수 및 모듈에 대한 타입 정보가 필요한데
// 그래서 node.js 타입 정보를 패키지로 설치해서 사용하자
// @type/node

//  npm install ts-node @types/node

