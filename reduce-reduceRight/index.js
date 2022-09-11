

const objArr = ["John", "María", "Alejandro", "Laura", "Manu"];
const objArr2 = [99, 2, 3, 4, 5, 6, 7];


const result = objArr.reduce((a, b) => {
  return `${a} - ${b}`;
});

const result2 = objArr2.reduce((a, b) => {
  return a-b;
});

const result3 = objArr2.reduceRight((a, b) => {
  return a-b;
});

console.log(result);
console.log(result2);
console.log(result3);