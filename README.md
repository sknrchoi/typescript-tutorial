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
> npm i -g typescript
> npm ls -g -depth=0
> tsc -v
> tsc --init
~~~

tsconfig.json 설정
~~~
{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "build"
    "target": "es6" // 어떤 버전의 자바스크립트로 컴파일할지 명시함
  }
}
~~~
