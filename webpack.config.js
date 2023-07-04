const path = require("path");

// webpack 구성 객체를 만들어서 내보내 주자

// module.exports = {
//   // 진입점 시작점 설정
//   // entry: "./20230703/webpack1/index.js",
//   entry: "./20230703/webpack2/index.js",
//   // 번들된 파일의 내보낼 옵션
//   output: {
//     filename: "bundle.js",
//     // path: path.join(__dirname, "20230703", "webpack1", "dist"),
//     path: path.join(__dirname, "20230703", "webpack2", "dist"),
//   },
//   // 모듈의 규칙 설정
//   module: {
//     rules: [
//       {
//         // test : 파일 확장자와 일치하는 정규식의 키
//         // .css 확장자의 파일의 규칙을 설정
//         test: /\.css$/,
//         // use확장자에 맞는 파일을 처리할 때 사용할 로더를 지정
//         // style-loader,css-loader를 사용할거임
//         // CSS 파일을 번들링 하자
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
// };

// html-webpack-plugin
// html파일을 만들어줌
// 애플리케이션에 포함된 번들을 관리하는 프로세스를 만들어준다.
// 주로 react같은 SPA 싱클 페이지 어플리케이션 만들 때 사용
const HtmlWebPackPlugin = require("html-webpack-plugin");

// webpack 구성 객체 내보내기
module.exports = {
  // 개발 모드 설정 //빌드할 때 시간을 최적화 단계를 건너뛰고
  mode: "development",

  // 진입점 시작점
  entry: "./20230703/webpack3/src/index.js",
  module: {
    rules: [
      {
        // test:.js,.jsx 확장자를 가진 파일에 대한 규칙을 생성
        test: /\.(js|jsx)$/,
        // node_modules 폴더를 제외하고 파일 처리
        // exclude 제외할 폴더
        exclude: /node_modules/,
        // babel-loader를 이용해서 파일을 번들링한다.
        use: ["babel-loader"],
      },
    ],
  },
  // 플러그인 설정
  plugins: [
    // HtmlWebPackPlugin을 사용해서 index.html 번들링 폴더에 생성
    new HtmlWebPackPlugin({
      template: "./20230703/webpack3/src/index.html",
      filename: "index.html",
    }),
  ],
  // 번들링을 내보낼 속성
  output:{
    // 번들 파일 이름
    filename:'bundle.js',
    // 경로 설정
    path:path.join(__dirname,'20230703','webpack3','src','dist')
  }
};
