# tsconfig.json

- compilerOptions: typescript 파일을 컴파일 진행시 어떤 형태로 컴파일을 진행할 지 속성정의 하는 부분
- include :컴파일을 진행할 폴더를 저장
- exclude: 컴파일에서 제외할 폴더 지정

## compilerOptions

- module:모듈 시스템 지정
- outDir: 내보낼 경로 지정
- target:번들링 문법 지정 ex=> es5,es6
- esModuleInterop:true =>(import/export 문법을 자연스럽게 변경 해주는 행위) 그냥 true로 설정
  (Common JS 형식과 ES6 형식의 혼용을 자연스럽게 통합 해주는 속성)
- strict:true
- baseUrl:모듈의 상대 경로를 지정 ./src
- paths:"baseUrl" 경로를 기준으로 상대 위치를 가져오는 매핑값(경로를 변수처럼 사용한다.)

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "outDir": "dist",
    "target": "ES6",
    "esModuleInterop": true,
    "strict": true,
    "baseUrl": "./src",
    "paths": {
      "@user/*": ["user/*"]
    },
    "include": ["src/**/*"],
    "exclude": ["**/*.test.ts"]
    // test.ts확장자가 붙은 파일은 모두 제외
  }
}
```

### 문제-> @user 이부분이 컴파일 되고 보니 @user그대로  빌드되어 있음, 즉 js는 이를 못 읽는다.

### tsc-alias 설치하자, 빌드시에 별칭 그대로 경로가 들어가면 문제가 생기므로 이런 별칭(@user)을 우리가 사전에 위에서 정한 경로로 변환해주는 라이브러리
```sh
npm install -D tsc-alias
```

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc && tsc-alias"
  },
  - pacakage.json 바꿔주기