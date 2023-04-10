// ! ? ?? !!


//非空类型断言(!)
// function printPoint2(message?: string) {
//   console.log(message!.length);
// }

// printPoint2('aa');
// // printPoint2();//这样还是会报错


// //可选链 ?
// function printPoint3(message?: string) {
//   //短路语法，找不到message就直接返回undefined，不去管后面的一连串代码
//   console.log(message?.length);
// }

// //使用可选链就可以不报错
// printPoint3('aa');
// printPoint3();



// !! ?? || 的使用
console.log('' || 1);
console.log('' ?? 1);

console.log(null || 2);
console.log(null ?? 2);

//使用！！来取布尔值
console.log(!!'str');



export { }