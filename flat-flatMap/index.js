

const arr = ["John", "María", ["Emilio", "Jose"], "Alejandro", "Javier"];

console.log(arr.flat(1));

console.log(arr.flatMap(e => Array.isArray(e) ? e.length : 1));

const nArr = arr.flatMap(e => Array.isArray(e) ? e[0] : e);

const nArr2 = arr.flatMap(e => e);

const arr2 = ["John", "María", ["Emilio", "Jose", ["Julio", "Antonio"]], "Alejandro", "Javier"];

const nArr3 = arr2.flat(Infinity).map(e => e);

console.log(nArr);
console.log(nArr2);
console.log(nArr3);