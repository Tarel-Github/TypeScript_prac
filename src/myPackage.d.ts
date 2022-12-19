//mypackage.js 파일의 함수를 가져온다.

interface Config {
  url: string;
}

declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): void;
}
