//类的多态：父类的引用（类型）指向子类对象
//多态的目的是为了写出更加具有通用性的代码
//const animal ：Animal = new Dog();

class Animal {
  action() {
    console.log('Animal-action');
  }
}

class Dog extends Animal {
  action(): void {
    console.log('Dog-action');
  }
}

class Fish extends Animal {
  action(): void {
    console.log('Fish-action');
    super.action();
  }
}


function fun(animals: Animal[]) {
  animals.forEach((action) => {
    action.action();
  })
}
fun([new Dog(), new Fish()]);
export { }