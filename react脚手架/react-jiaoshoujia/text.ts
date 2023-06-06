const arr:(string|number)[] = [1,2]
const arr2:[string,any,number,...any] = ['lnl',2,2,23,'t',true]
arr.push('2')

interface Animal {
  eat(name: string): string;
  speak: (name: string) => string;
}

let tom: Animal = {
  eat: ()=>'p',
  speak: (name: string) => `speak ${name}`,
};

class Person{
  public name:string
  private age:number
  protected sex:string
  readonly id:number
  constructor(name:string,age?:number,sex?:string,id?:number){
    this.name = name
    this.age = age || 1
    this.sex = sex || 'female'
    this.id = id || 1
  }
}

//这样编写更加简洁
class Person2{
  constructor(
    readonly name:string
  ){}
}

const p1 = new Person('lnl')
const p2 = new Person('mushroom')
const persons:Person[] = [p1,p2]//可以把类也作为一种类型

const p2p = new Person2('xiaolang')
console.log(p2p)

const obj1 = {name:'lnl'}
type obj = typeof obj1
const obj = fn(obj1)

console.log(obj.name)
function fn(obj:obj){
  return {...obj,id:1}
}
