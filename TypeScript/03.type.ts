type IdType = string | number | boolean;
type PointType = {
  name: string
  age: number;
  sex: string,
  drama: IdType[]
}

function printPoint(point: PointType) {
  console.log(point.drama[0]);
}

let obj = {
  name: 'lnl',
  age: 21,
  sex: 'female',
  drama: []
}
printPoint(obj as PointType);