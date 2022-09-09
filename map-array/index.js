const arr = ["a", "b", "c"];

const arrMap = arr.map((e) => {
  return e+"Updated"
});

const arrMap2 = arr.map(e => e+"Updated2");

console.log(arrMap);
console.log(arrMap2);

