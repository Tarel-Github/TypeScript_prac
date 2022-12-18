//==============================================================================
//타입을 모를때는 언노운을 사용한다
let unA: unknown;

//unA의 타입을 물어보기 때문에, 아래 코드는 작동한다.
if (typeof unA === "number") {
  let nuB = unA + 1;
}

//void는 아무것도 리턴하지 않는 함수에 사용
//아래 함수는 기본적으로 void가 됌 hello():void라고 써줄 수도 있지만 굳이 그럴 필요는 없다.
function hello() {
  console.log("abc");
}

//==============================================================================
//never는 절대로 리턴하지 않는 함수에 사용, 주로 에러등에 사용
function neverHello(): never {
  throw new Error("xxx");
}

//never는 파라미터가 두가지 이상의 타입일 때 절대로 반환 불가능한 값이 never가 된다.
//name이 string이거나 number 일때 name을 반환하라고 했다.
//때문에 마지막else의 name은 절대로 반환되지 않기 때문에, 마지막 name은 never가 된다.
function neverWorld(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name;
  }
}
