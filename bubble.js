function bubbleSort(array) {
  const n = array.length;
  let isSwapped;
  do {
    isSwapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (array[i] === array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);
}

const array = [-2, 8, 34, 21, 99, 32, 20];
bubbleSort(array);
console.log(array);

//big O(n^2)  //here we are using two loops
