var isPalindrome = function (s) {
  let low = s.toLowerCase();
  let ispalid = low.replace(/[^a-zA-Z0-9]/g, "");
  let left = 0;
  let right = ispalid.length - 1;
  while (left < right) {
    if (ispalid[left] == ispalid[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

let s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));
