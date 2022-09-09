

class NumerosPrimos {

  numeros = [];

  constructor(arr) {
    this.numeros = arr;
  }

  getNumerosPrimos() {
    let numPri = [];

    this.numeros.forEach(e => {
      let flag = 0;
      for (let i=1; i<=100; i++) {
        if(e&i===0) {
          flag++;
        }
      }
      if(flag >= 0 && flag < 2) numPri.push(e);
    });
    return numPri;
  }

}

let numeros = [7, 8, 9, 5, 2, 10, 44, 27, 85, 36, 41, 17, 46, 49, 57, 51, 59];

let np = new NumerosPrimos(numeros);
let numPri = np.getNumerosPrimos();
let numPriOrd = structuredClone(numPri).sort((a, b) =>  a-b);
console.log(`Números primos: ${numPri}`);
console.log(`Números primos ordenados de menor a mayor: ${numPri}`);
console.log(`Números primos ordenados de mayor a menor: ${numPri.reverse()}`);