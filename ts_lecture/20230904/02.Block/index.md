```sh
npm init -y
npm i -D typescript ts-node
npm i -D @types/merkle merkle
npm i -D @types/crypto-js crypto-js

#  tsconfig-paths ts-node로 node 환경에서 실행을 할 때 우리가 정해준 별칭을 경로로 변환해서 실행시키기 위해 사용
npm i -D tsc-alias tsconfig-paths


npx tsc --init


# zert 라이브러리 설치
npm i -D @types/jest jest

```

## jest.config.ts
- jest로 test code를 실행할 때 옵션설정 파일
