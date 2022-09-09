
const same = ["test","test", "test", "test", "test", "test", "test"];

const differents = ["test1", "test2", "test3"];

console.log(same.every(word => word === "test")); // true
console.log(same.every(word => word.length === 4)) // true

console.log(same.every(word => word !== "test")); // false

console.log(differents.some(word => word === "test1")); // true