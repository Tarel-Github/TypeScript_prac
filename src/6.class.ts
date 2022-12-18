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
}

class PlayerClass2 extends User {}

const classTarel2 = new PlayerClass2("Tarel", "Player", "Nick");
classTarel2.getFullName;
