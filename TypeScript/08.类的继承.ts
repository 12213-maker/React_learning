//类的定义
class Person {
  name: string | undefined = 'mushroom';
  age: number | undefined = 21;
  constructor(name?: string, age?: number) {
    this.name = name || this.name;
    this.age = age;
  }
  eating(sex: string): void {
    console.log(this.name, sex);
  }
}

const p = new Person();
p.eating('female');

//类的继承
class Animal {
  name: string = '';
  age: number = 0
  sex: string = 'female';
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age
  }
  eating() {
    console.log('animal-eating');
  }
}
class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
  }
  //重写了父类的eating方法
  eating(): void {
    //如果想执行自己的方法的同时也执行父类的方法
    super.eating();
    console.log('dog-eating');
  }
}

let dog = new Dog('小狗', 2);
console.log(dog.name, dog.age, dog.sex);
dog.eating();


