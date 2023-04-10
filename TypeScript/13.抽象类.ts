/*
  //父类本身不需要对某些方法进行具体类的实现，所以父类中定义的方法，我们可以定义为抽象方法
*/

abstract class Shape {
  abstract getArea(): number;
}

class S1 extends Shape {
  border: number = 0;
  constructor(newBorder: number) {
    super();
    this.border = newBorder;
  }
  getArea(): number {
    return this.border * this.border;
  }
}


class S2 extends Shape {
  width: number = 0;
  constructor(newWidth: number) {
    super();
    this.width = newWidth;
  }
  getArea(): number {
    return this.width * this.width * 3.14;
  }
}


function getAreaFun(shape: Shape) {
  return shape.getArea();
}

let s1 = new S1(3);
let s2 = new S2(2);
console.log(getAreaFun(s1));
console.log(getAreaFun(s2));