//타입 스크립트 기본 선언법
let n: number = 1;
let string: string = "helloWorld";
let bool: boolean = true;

//any는 타입스크립트를 벗어나 자바스크립트로 돌아간다
const anyA = [1, 2, 3, 4];
const anyB: any = true;
anyA + anyB;

//배열 선언법
let array = []; //타입이 정의되지 않음
let numArray: number[] = [1, 2, 3]; //배열은 이런식으로 선언
let AAA: [string, number, boolean] = ["Tarel", 1, true];

//객체 선언법 기본
const player_1 = {
  name: "Tarel",
};

//객체 선언법 타입스크립트식
const player_2: {
  name: string;
  age?: number;
} = {
  name: "Tarel",
};

type Player = {
  name: string;
  age?: number;
};

const Tarel: Player = {
  name: "Tarel",
};

//함수 선언법
function playerMaker(name: string) {
  return {
    name,
  };
}

const aa = playerMaker("aa");
function playerMaker_2(name: string): Player {
  return {
    name,
  };
}
const bb = playerMaker_2("bb");
bb.age = 12;
