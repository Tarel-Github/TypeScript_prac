//private, public 는 자바스크립트에 없는 기능

class PlayerClass {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
}

const classTarel = new PlayerClass("Tarel", "Player", "nick");
//classTarel.firstName 은 에러다, private이기 때문

//추상클래스================================================================================
//추상클래스는 다른 클래스로부터 상속받을 수 있는 클래스
// const a = new User()는 작동하지 않는다. 추상 클래스는 상속에만 쓸 수 있기 때문
// 아래 코드에서 상속클래스는 getFullName 함수를 가지고 있다.
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
  getFullName() {
    //함수(메소드)도 앞에 private 사용 가능
    return `${this.firstName} ${this.lastName}`;
  }
  //추상 메소드는 코드가 없는 메소드라서 반환타입만 정해준다.
  //추상 메소드는 상속받은 클래스에서 정의를 반드시 해줘야 한다.
  abstract getNickname(): void;
}

//상속받은 클래스에서 private인 것은 상속 받은 이후에도 쓸 수 없다
//protected는 외부에선 쓸 수 없지만 상속받은 class에선 불러올 수 있다.
class PlayerClass2 extends User {
  getNickname() {
    console.log(this.nickname);
  }
}

const classTarel2 = new PlayerClass2("Tarel", "Player", "Nick");

classTarel2.getFullName;

//해시 딕셔너리================================================================================

type Words = {
  [keyyy: string]: string;
};

let _dict: Words = {
  감자: "음식",
  뭐지: "츤제",
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

//컨스트럭터는 클래스가 함수처럼 받는 파라미터인듯??
class Word {
  constructor(public term: string, public def: string) {}
}

const someFood = new Word("뭐", "음식");

const dict = new Dict();

dict.add(someFood); //add라는 메소드가 안에 있음
