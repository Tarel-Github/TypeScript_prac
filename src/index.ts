// //myPackage.js 파일과 myPackage.d.ts 파일에서 가져온다
// //myPackage.d.ts파일에서, init은 bool 타입이라고 정의됌
// import { init, exit } from "myPackage";

// init({
//   url: "true",
// });

// exit(1);

// localStorage.clear();

import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height} ${data}}`;
  }
}
