
const objArr = [
  {
    name: "John",
    age: 12
  },
  {
    name: "María",
    age: 22
  },
  {
    name: "Alejandro",
    age: 34
  },
  {
    name: "Laura",
    age: 28
  },
];

const objArr2 = ["John", "María", "Alejandro", "Laura", "Manu"];


console.log(objArr.find(e => e["name"] === "Alejandro"));
console.log(objArr.findLast(e => e["name"] === "Alejandro"));
console.log(objArr.find(e => e.age === 22));
console.log(objArr.findIndex(e => e.age === 22));
console.log(objArr.findLastIndex(e => e.age === 22));
console.log(objArr2.find(e => e.length === 4));
console.log(objArr2.findIndex(e => e.length === 4));