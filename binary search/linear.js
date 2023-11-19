//Function sholud return target index value if its find if not shold return -1
//with using inbulit methods
// function linear(array, target) {
//   return array.indexOf(target);
// }

// array = [-2, 8, 34, 21, 99, 32, 20];
// target = 200;
// console.log(linear(array, target));
//without using inbulit methods
function linear(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == target) {
      return i;
    }
  }
  return -1;
}

array = [-2, 8, 34, 21, 99, 32, 20];
target = 20;
console.log(linear(array, target));

// time complexity for thos O(n)
