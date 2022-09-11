
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

const el = objArr.find(e => e["name"] === "Alejandro");
console.log(el);


const el2 = objArr.find(e => e.age === 22);
console.log(el2);

const el3 = objArr2.find(e => e.length === 4);
console.log(el3);
