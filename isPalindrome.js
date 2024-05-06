var isPalindrome = function (x) {
  let left = 0;
  x = x.toString();
  let right = x.length - 1;
  while (left < right) {
    if (x[left] == x[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(10));
