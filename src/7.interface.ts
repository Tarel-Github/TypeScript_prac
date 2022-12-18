//잠시 복습================================================================
type Team = "red" | "blue" | "yello";
type Heath = 1 | 2 | 3 | 4 | 5 | 6;

type reviewPlayer = {
  nickname: string;
  team: Team;
  health: Heath;
};

//team에선 레드, 블루, 옐로우만 있으므로 이것만 사용 가능
const newPlayer: reviewPlayer = {
  nickname: "some",
  team: "red",
  health: 1,
};
//인터페이스================================================================
//인터페이스는 오브젝트 모양을 TS에게 설명해주기 위해서만 사용되는 키워드
//어쩌면 타입이랑 비슷하다
interface reviewPlayer3 {
  nickname: string;
  team: Team;
  health: Heath;
}

interface I_User {
  name: string;
}

//인터페이스도 상속 가능, 같은 인터페이스가 여러개면 알아서 하나로 합쳐짐
interface I_Player extends I_User {}

interface I_Player {
  age: number;
}

const myTarel: I_Player = {
  name: "myTarel",
  age: 100,
};

//인터페이스 한 번더 =================================================
//implement
interface reviewPlayer4 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  heath: number;
}

//인터페이스를 상속할 떄는 프로퍼티를 private나 protected로 하지 못함
//한번에 두개를 상속 받았다. 전부 다써야함
class I_Player2 implements reviewPlayer4, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public heath: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name} my name is${this.firstName} ${this.lastName} `;
  }
}

function makeUser(user: reviewPlayer3) {
  return "hi";
}

makeUser({
  nickname: "asdf",
  team: "red",
  health: 1,
});
