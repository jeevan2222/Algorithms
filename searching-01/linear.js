function isPowerOfTwo(number) {
  if (number < 1) return false;
  while (number > 1) {
    if (number % 3 !== 0) return false;
    number = number / 3;
  }
  return true;
}
// console.log(isPowerOfTwo(39));


//Factor number


function factorial(number) {
 if(number == 0 ) return 1;

 return number * factorial(number-1)

}
console.log(factorial(6));
