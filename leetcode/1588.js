var sumOddLengthSubarrays = function (arr) {
  let lenArr = [];
  let i = 1;
  while (arr.length >= i) {
    lenArr.push(i);
    i += 2;
  }
  let sum = 0;

  for (ele of lenArr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      temp.push(arr[i]);
      if (temp.length == ele) {
        for (let k = 0; k < temp.length; k++) {
          sum += temp[k];
        }
      }
    }
  }
};

let arr = [1, 4, 2, 5, 3];

console.log(sumOddLengthSubarrays(arr));
