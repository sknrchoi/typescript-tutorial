# typescript-tutorial

### typescript 프로젝트 구성하기
>실제로는 NestJS, NextJS, Create-React-App(CRA)를 사용하는 사람들 수동으로 타입스크립트 프로젝트를 설정할 일이 없음.  
프레임워크, 라이드러리, 패키지들이 타입스크립트 프로젝트를 자동으로 만들어 주기 때문임

설치환경
- NoneJS
- Visual Studio Code

typescript 프로젝트 초기화
~~~
typescript-tutorial
> npm init
> npm i -g typescript
> npm ls -g -depth=0
> tsc -v
> tsc --init # tsconfig.json 파일이 생성됨
~~~

module 설치
~~~
> npm i -D ts-node # 빌드없이 바로 실행해서 콘솔에서 확인할 수 있음
> npm i nodemon # 서버 재기동 없이 실행시켜주는 것
~~~

tsconfig.json 설정
~~~
{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "build",
    // 어떤 버전의 자바스크립트로 컴파일할지 명시함
    "target": "es6", 
    /* 어떤 환경에서 돌아가는지 명시하게 됨. DOM을 기재하면서 브라우저 환경에서 돌아간다는 것을 알리고  
     * localStorage나 window 함수를 사용할 수 있음 */
    "lib": ["ES6","DOM"],
    /* 프로젝트에 js 파일을 typescript의 보호를 받아 사용할 수 있게됨.  
     * js파일에 //@ts-check 주석을 추가하고 jsDoc을 입력하여 typescript의 보호를 받을 수 있음 */
    "allowJs": true, 
  }
}
~~~
