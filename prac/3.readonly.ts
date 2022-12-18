//리드온니 기능

type Age = number;
type Name = string;

//리드온니는 TS 전용, 한번 입력된 내용을 바꿀 수 없음
type NewPlayer = {
  readonly name: Name;
  age?: Age;
};
const playerMaker2 = (name: string): NewPlayer => ({ name });
const Tarel_2 = playerMaker2("Tarel");
console.log(Tarel_2);

//리드온니 배열, 배열이 리드온니면 push나 map등이 불가능
const names: readonly string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const AA: [string, number, boolean] = ["Tarel", 1, true];
