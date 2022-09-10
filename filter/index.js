
let arr = ["Test", "Mateo", "John"];

let arr2 = arr.filter(e => e.startsWith("T"));

let arr3 = arr.filter(e => {
  return e.startsWith("M");
})

console.log(arr2);
console.log(arr3);