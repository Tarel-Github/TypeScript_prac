//myPackage.js 파일과 myPackage.d.ts 파일에서 가져온다
//myPackage.d.ts파일에서, init은 bool 타입이라고 정의됌
import { init, exit } from "./myPackage";

init({
  url: "true",
});

exit(1);

localStorage.clear();
