// typeof === !== instanceof in

function fun(value: string | number) {
  //使用typeof进行类型缩小
  if (typeof value === 'string') {
    console.log(value.length);
  } else {
    console.log(value);

  }

}
fun('string');


type Alignment = 'left' | 'right' | 'top' | 'bottom';
function fun2(align: Alignment) {
  switch (align) {
    case 'left':
      console.log('left-switch');
      break;
    default:
      break;
  }
}
fun2('left');


//instanceof 验证是否在原型链上
class Student {
  play() {
    console.log('play');
  }
}

class Tearcher {
  tearching() {
    console.log('tearching');
  }
}

type Person = Student | Tearcher;

function fun3(person: Person) {
  if (person instanceof Tearcher) {
    console.log(person.tearching());
  } else {
    console.log(person.play());
  }
}

fun3(new Tearcher());


//当传入的是type的时候
type fish = {
  swimming: (name: string) => void
}

type dog = {
  running: (name: string) => void
}

//使用 in 对 type进行验证
function fun4(animal: fish | dog) {
  if ('running' in animal) {
    console.log(animal.running('name'));
  } else {
    console.log(animal.swimming('name'));
  }


}
let obj: dog = {
  running(name: string) {
    console.log(name);
    return 2;
  }
}
fun4(obj);
export { }