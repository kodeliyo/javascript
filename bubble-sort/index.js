
function bubbleSort(arr) {
  let sorted = false;

  while(!sorted) {
    sorted = true;

    for(let i=0; i<arr.length -1; i++) {
      if(arr[i] > arr[i+1]) {
        let temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        sorted = false;
      }
    }
  }
  return arr;
}

let numbers = [8, 23, 235, 1, 2, 89, 5, 6, 7];

console.log(bubbleSort(numbers));