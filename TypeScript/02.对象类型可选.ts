//对象类型
type obj = {
  name: string,
  age: number;
  sex?: string
}
function printPoint(obj: obj) {
  console.log(obj.name);
  console.log(obj.age);
  console.log(obj.sex?.length);
}
printPoint({ name: 'lnl', age: 21 });




export { }