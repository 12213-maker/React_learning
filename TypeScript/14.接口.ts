// type InfoType = {
//   name: string,
//   age: number;
//   sex?: string
// }

// interface IInfoType2 {
//   readonly name: string,
//   age: number;
//   sex?: string
// }

// let info: InfoType = {
//   name: 'lnl',
//   age: 21
// }

// let info2: IInfoType2 = {
//   name: 'lnl',
//   age: 21
// }



// //索引类型
// interface IndexLanguage {
//   [k: number | string]: string;
// }

// const frontLanguage: IndexLanguage = {
//   0: 'dog',
//   1: 'cat',
//   'age': 'age'
// }



// //函数类型
// interface Icalc {
//   num1: number,
//   num2: number;
//   calcFun: (number: number) => number,
//   myFunc(a: number): number;
// }
// function calc(value: Icalc): void {
//   console.log(value.num1 + value.num2 + value.calcFun(12));
// }

// console.log(calc({
//   num1: 1,
//   num2: 2,
//   calcFun: (number: number) => {
//     console.log(number); return number
//   },
//   myFunc: (number: number) => {
//     console.log(number); return number
//   },

// }));


// //接口的继承
// interface IShape {
//   color: string;
// }
// interface Square extends IShape {
//   sideLength: number;
// }

// let square: Square = {
//   color: 'lightblue',
//   sideLength: 21
// }

// //一个类还可以继承多个接口
// interface Area {
//   getArea(): number;
// }

// interface S2 extends Area, IShape {
//   sideLength: number;
// }

// let s2: S2 = {
//   color: 'lightblue',
//   sideLength: 21,
//   getArea() {
//     return 2
//   }
// }


//一种组合类型的方式：联合类型
type WhyType = number | string
type Direction = 'left' | 'top' | 'right'


//另一种组合类型的方式：交叉类型
type WType = number & string; //WType是never类型

interface A {
  a: number;
}

interface B {
  b: string;
}

type C = A | B;

let c1: C = {
  a: 1
};

let c2: C = {
  b: "hello"
};

let c3: C = {
  a: 3,
  b: 'c3'
}
// console.log(c1.b); // 编译错误：类型“A”上不存在属性“b”
console.log((c2 as B).b); // 编译错误：类型“B”上不存在属性“a”
console.log((c3 as B).b);


type C2 = A & B
let c4: C2 = {
  a: 4,
  b: 'c4'
}
console.log(c4.a,c4.b);
