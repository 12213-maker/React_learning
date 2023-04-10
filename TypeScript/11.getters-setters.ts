class Person {
  //私有属性是_开头
  _name: string;
  _age: number;
  constructor(name: string, newAge: number) {
    this._name = name;
    this._age = newAge;
  }

  //访问器setter/getter
  set name(newName: string) {
    this._name = newName;
  }
  get name() {
    return this._name;
  }

  set age(newAge: number) {
    this._age = newAge;
  }
  get age(){
    return this._age
  }
}

let p: Person = new Person('lnl', 21);
//直接通过p._name来修改
p.name = 'mushroom';
console.log(p.name);
p.age = 1222;
console.log(p.age);


export { };