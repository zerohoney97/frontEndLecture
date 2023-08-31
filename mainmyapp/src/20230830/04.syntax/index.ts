// javascript
let num = 20;
const str = "hello world";
const nan = NaN;
const infinity = Infinity;
const bool = true;
const nullVa = null;
const undefinedVal = undefined;
const obj = {};
const arr = [];
const fn = (a: any) => {
  console.log(a);
};
const sum = (a: any, b: any) => {
  return a + b;
};

// typescript
let num2: number = 20;
const st2: string = "hello typescript";
const nan2: number = NaN;
const infinity2: number = Infinity;
const bool2: boolean = true;
const nullva: null = null;
const undefinedVal2: undefined = undefined;
const obj2: object = {};
const arr2: Array<number | string> = [1, 2];
// void:반환값이 없다.
const fn2 = (a: number): void => {
  console.log(a);
};

// 함수명 =():return의 타입=>{}
const sum2 = (a: number, b: number): number => {
  return a + b;
};

// any: 어떤 타입이든 할당할 수 있다. 되도록 남발하지 말자 타입의 안정성이 보장되지 않음
const any2: any = "";

// unknown:어떤 타입이든 할당 가능 타입의 안정성 보장
const unknown2: unknown = "";

if (typeof unknown2 === "string") {
  console.log(unknown2.length);
}
// 없으면 오류, 타입이 지정되지 않았기 때문이다.
// console.log(unknown2.length);
