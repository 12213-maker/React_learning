//interface重复定义可以直接合并
interface A {
  name: string
}
interface A {
  age: number
}
let obj: A = {
  name: 'lnl',
  age: 21
}


//但是type不可以这样写，会直接报错


//继承方式不同，type通过&继承(交叉继承)，interface通过extends继承

interface B extends A {

}
type C = {
  name: string
}
type D = C & {
  age: number,
  name: number//这样会将name：string&number 变成never类型
}
// let obj2: D = {
//   age: 12,
  // name: 'lnl'
// }


export { }