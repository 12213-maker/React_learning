
const message: string = 'hello world';
const message2: 'hello world' = 'hello world';


//字面量类型的意义，就是必须结合联合类型
type Alignment = 'left' | 'right' | 'top' | 'bottom';
let align: Alignment = 'top';


type Method = 'post' | 'get'
function request(url: string, method: Method) { }

const options = {
  url: 'baidu.com',
  method: 'post'
}

// request(options.url, options.method);//这样传值，虽然method的值确实是post但是类型是string，所以不能通过编译

//解决方法一：类型断言
// request(options.url, options.method as Method);


//解决方法二：给options做类型限制
// const options2: { url: string, method: Method } = {
//   url: 'baidu.com',
//   method: 'post'
// }


//解决方法三：给options as const ,将其变成只读属性
const options3 = {
  url: 'baidu.com',
  method: 'post'
} as const;
request(options3.url, options3.method);