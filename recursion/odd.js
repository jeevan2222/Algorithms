function isOdd(num) {
  if (num.length == 0) {
    return;
  }
  if (num[0] % 2 !== 0) {
    console.log("odd number", num[0]);
  }
  isOdd(num.slice(1));
}

let num = [123, 34, 55, 66];
isOdd(num);
