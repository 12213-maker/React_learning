let name: string = 'hello';
let age: number = 21;
let female: boolean = true;


//数组的类型
let hobbits: string[] = ['看小说'];//推荐
let hobbits2: Array<string> = ['写小说'];//类型断言，不推荐 , react-jsx中有冲突<>

//对象的类型
interface objType {
  name: string;
  age: number;
  female?: boolean;
}

let obj: objType = {
  name: "lnl",
  age: 21
}


//symbol类型
let title2 = Symbol('title');
let title1 = Symbol('title');
let obj2 = {
  [title1]: 'lnl',
  [title2]: 'mushroom'
}

// console.log(name, age, female, hobbits, hobbits2, obj);
console.log(obj2[title2]);

//never到底有什么用?
//封装一个核心函数，利用never报错来提醒
function handleMessage(message: string | number) {
  switch (typeof message) {
    case 'string':
      console.log('string', message);
      break;
    case 'number':
      console.log('number', message);
      break
    default:
      //用never报错，来提醒开发人员修改代码
      const result: never = message;
  }
}

handleMessage('string');
handleMessage(123);
// handleMessage(true);


//元组类型
const arr: [string, number] = ['sdf', 23];
//使用场景 useState类型推断（模拟）

function useMyState<T>(value: T): [T, (value: T) => void] {
  let newValue: T = value;
  const setValue = (value: T): void => {
    newValue = value
  }
  return [newValue, setValue];
}

const [data, setDate] = useMyState(1);
const [str, setStr] = useMyState('str');


export { }