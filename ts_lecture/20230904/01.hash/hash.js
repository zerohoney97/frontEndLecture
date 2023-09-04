const { SHA256 } = require("crypto-js");

// SHA-256은 현재 블록체인에서 가장 많이 채택해서 사용하고 있는 암호 방식
// 출력속도가 빠르고 단방향성 암호화 방법을 제공한다.

// 복호화가 불가능 하다. 아직까지 큰 단점은 발견된건 없고
// 속도가 빨라서 인증서나 블록체인에 많이 사용중임

// SHA256 알고리즘은 256비트로 구성된 64자리 문자열로 암호화 해준다.

const str = "안녕하세요";
console.log("해시 결과:", SHA256(str).toString());
console.log("해시 결과:", SHA256(str).toString().length);
