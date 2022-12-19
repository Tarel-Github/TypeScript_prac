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
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }
  public getBlock() {
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("second one");
blockchain.addBlock("third one");
blockchain.addBlock("Fourth one");

blockchain.getBlock().push(new Block("x", 11111, "법규"));

console.log(blockchain.getBlock());
