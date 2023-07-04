// babel

// 자바스크립트 코드의 변환을 도와주는 도구
// 자바스크립트를 컴파일 해주는 도구

// 자바스크립트 문법이 진화를 꾸준히 했고
// ES5 => ES6문법이 개발되고

// ES6 문법이 개발 되었는데 ES5에서 개발한 것들을 모두
// 변환하기 힘들어서
// babel로 문법을 쉽게 고쳐서 쓰려고 변환 시켜준다.

// 모듈 시스템

// --------------common js= (require,module.exprots)~~~!!

// => a.js
// const text = "asd";
// module.exports = { text };

// b.js
// const { test } = require("a.js");
// console.log(text);

// --------------------------------------------------------
// ----------------------------ES6----------------------------

// const text = "hi";
// 1.export {text}; => 여러개를 내보낼 경우
// 2.export default text =>단일로 내보낼 경우

// b.js
// 1. import {text} from 'a.js'
// 2. import text1 from 'a.js'=> 원하는 이름으로 가져오기 가능
// console.log(text);

// 1.바벨 기본 설치
// npm install @babel/core @babel/cli @babel/preset -env

// 2.babel 환경 구성
// .babelrc
// rc=Run Commands,Run Controller 등등의 의미

/*  

json으로 설정
{
    "presets":["@babel/preset-env"]
}

*/

// 3.babel 실행

// npx babel [변환할 파일명] --out-file [내보낼 경로]

// npx babel app.js --out-file dist/app.js

// 2.babel02 만들고
// npm init -y
// npm install @babel/core @babel/cli
// npm install @babel/plugin-transform-modules-commom.js

// {
//     // 설정
//     "plugins":["@babel/plugin-transform-modules-commom.js"] //presets 자바스크립트 기능 또는 구문을 변환하는  babel 플러그인
// }

// 3.babel03만들고 jsx 문법 컴파일 해보기

// babel설치
// npm install @babel/core @babel/cli
// npm install @babel/preset-react

// -----------------webpack=-----------------------

// babel은 코드자체를 변환 할 때, 단일파일
// webpack:모듈 번들러= 여러파일을 하나의 파일로 구성해주는것

// js1
// js2
// js3
// js4
// js5
// 하나로 번들링

// 모듈
// 모듈은 프로그램을 구성 할 때 구성 요소로, 관련된 데이터를 함수로 묶은 단위

// user
// user .controller
// user .service
// user .view

// 번들러
// 번들러는 의존성을 가지고 동작하는 모듈 코드를 하나의 파일로 만들어 주는 것

// webpack 속성
// entry: 진입점을 지정 시작점으로 사용할 모듈을 webpack에 알려줌
// output:내보내는 번들링 방법을 결정 생성한 번들링 파일의 위치,이름
// loaders: 번들링 중에 모듈의 소스 코드에 적용되는 자바스크립트나 css 이미지 파일을 처리
// plugins:추가 기능 사용시 번들 최적화

// babel속성은
// presets
// plugins

// webpack 기본 사용
// 패키지 설치

// npm init -y
// npm install webpack-cli webpack

// 2.프로젝트 생성

// src 폴더를 만들거고
// 번들링 진행을 해봅시다

// webpack의 설정 파일
// webpack.config.js

// webpack 실행
// npx webpack

// loaders 속성을 사용해서
// 다양한 유형의 파일을 모듈화 할 수 있다.
// CSS,Image 등등을
// 번들링 해보자

// 1.패키지 설치
// npm install webpack webpack-cli css-loader style-loader
// 2.프로젝트 구성
// src 폴더에 index.css,index.js 두 파일 생성

// 3.webpack.config.js추가


// 1. webpack3
// 1.webpack plugin
// html 파일을 만들자

// npm install webpack webpack-cli html-webpack-plugin

// babel 설정
// .babelrc
// json객체로 다음과 같다.
/*

{
    presets:["@babel/preset-env",babel/preset-react]
}

*/


// react 설치 react-dom
// npm i react react-dom
// npm i @babel/preset-env @babel/preset-react babel-loader