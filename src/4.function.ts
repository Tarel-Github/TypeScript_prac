//기본적인 함수 선언법, a와 b의 타입을 반드시 정해줘야 한다.
function add_basic(a: number, b: number) {
  return a + b;
}

//a는 숫자고, b도 숫자며, 리턴하는 값도 숫자다.
//Add와 Add2는 같다.
type Add = (a: number, b: number) => number;
type Add2 = { (a: number, b: number): number };

//아래의 경우, Add에서 타입이 지정되어 있으므로 달리 타입을 따로 지정해줄 필요가 없다.
//리턴값 또한 숫자가 되어야 한다. => {a+b}는 객체이므로 불가능하다.
const add: Add = (a, b) => a + b;

//==============================================================================
//오버로딩
//아래 식은 a는 항상 number, b는 number 또는 string이며, 리턴값은 항상 number임을 뜻함
//때문에 a+b는 성립할 수 없다.
//const add3:Add3 = (a,b) => a + b; 는 성립할 수 없다.
type Add3 = { (a: number, b: number): number; (a: number, b: string): number };

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else {
    console.log(config.path);
  }
};

//오버로딩 2
//아래 코드는 a, b 를 받아서 숫자룰 반환하던가, a,b,c를 받아서 숫자를 반환하던가 이다.
type Add4 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add2: Add4 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add2(1, 2);
add2(1, 2, 3);
