/*
//public private protected readonly
  public 修饰的是在任何地方可见，共有的属性或方法，默认编写的属性就是public的
  private 修饰的是仅在同一类中可见，私有的属性和方法
  protected 修饰的是仅在类自身及子类中可见，受保护的属性或方法
*/


class Person {
  private name: string = 'lnl';
  protected age: number = 21;
  public sex: string = 'female';
  //只读属性，可以在构造器中赋值
  readonly height: number = 2.00;
  setName(newName: string) {
    this.name = newName;
  }
}

class Kid extends Person {
  getName() {
    //private私有属性，只能在同一类中访问
    // console.log(this.name);
  }
  getAge() {
    //protected自身和子类中可见
    console.log(this.age);

  }
}

let person = new Person();
//public 在任何地方可见
console.log(person.sex);


export { }