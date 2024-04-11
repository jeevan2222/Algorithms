function sumZero(num1) {
  let len = num1.length - 1;
  let j = 0;
  while (j <= len) {
    if (num1[j] + num1[len] == 0) return [num1[j], num1[len]];
    if (num1[j] + num1[len] > 0) {
      len--;
    } else {
      j++;
    }
  }
  return undefined;
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
