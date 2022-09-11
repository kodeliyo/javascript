
const arr = ["Test", "Mateo", "John"];

const arr2 = arr.filter(e => e.startsWith("T"));

const arr3 = arr.filter(e => {
  return e.startsWith("M");
});

const arr4 = arr.filter(e => e.length <= 4);

console.log(arr2);
console.log(arr3);
console.log(arr4);