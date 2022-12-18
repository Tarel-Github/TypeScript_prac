//폴리모플리즘=================================================
//콘크리트 타입이란 넘버, 스트링, 보이드 등이 해당한다
//바로 아래 타입은 제네릭이 적용 안된것
type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true, false]);
superPrint(["a", "b", "c", "d", "e", "f"]);

//제네릭 적용, 꺽쇠안에 뭔 글자든 넣어도 된다.===============================
//제네릭이 적용되면 윗 문단과 달리 어떤 타입이든 넣을 수 있게된다.
//정확히는 타입이 필요해질 때마다 추가해주는 개념으로써 새로운 타입을 받을 때 마다 계속 늘어난다.
type SuperPrint2 = {
  <Gen>(arr: Gen[]): void;
};

const superPrint2: SuperPrint2 = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint2([1, 2, 3, 4]);
superPrint2([true, false, true, false]);
superPrint2(["a", 4, "c", true, "e", "f"]);

//에시 3=================================================
//제네릭 대신 any를 쓸 수도 있을 것이다. 그러나 any를 쓰면 아래d에 d.toUpperCase()를 하면 애러가 나지 않는다.
//그러나 제네릭을 쓴 c는 에러가 난다.
type SuperPrint3 = {
  <T>(arr: T[]): T;
};
type SuperPrint4 = (a: any[]) => any;
const superPrint4: SuperPrint4 = (a) => a[0];

const superPrint3: SuperPrint3 = (arr) => arr[0];

const a = superPrint3([1, 2, 3, 4]);
const b = superPrint3([true, false, true, false]);
const c = superPrint3(["a", 4, "c", true, "e", "f"]);
const d = superPrint4(["a", 4, "c", true, "e", "f"]);

d.toUpperCase();

//예시 4=================================================
//T는 배열파라미터고 M은 그냥 파라미터
//파라미터가 두개니까 두 개가 들어가야 한다.
type SuperPrint5 = <T, M>(a: T[], b: M) => T;
const superPrint5: SuperPrint5 = (a) => a[0];

const aaa = superPrint5([1, 2, 3, 4], 1);
const bbb = superPrint5([true, false, true, false], 2);
const ccc = superPrint5(["a", 4, "c", true, "e", "f"], "asd");

//예시 5 =================================================================
type Player2<E> = {
  name: string;
  extraInfo: E;
};

const Tarel2: Player2<{ favFood: string }> = {
  name: "Tarel",
  extraInfo: {
    favFood: "Something",
  },
};

//이런식으로 작성할 수도 있음

type TarelExtra = {
  favFood: string;
};
type TarelPlayer = Player2<TarelExtra>;

const Ivy: Player2<null> = {
  name: "Ivy",
  extraInfo: null,
};
