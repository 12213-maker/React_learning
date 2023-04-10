function fun(name: string = 'lnl', age: number): number {
  return 1;
}

const fun2: (name: string) => void = () => { }
const fun3 = (name: string): void => { }

//函数的重载
function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;

function add(num1:any, num2:any):any {
  console.log(num1 + num2);
  return num1 + num2
}

add(1,2);
add('1','2');