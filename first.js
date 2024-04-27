var firstPalindrome = function (words) {
  for (word of words) {
    let left = 0;
    let right = word.length - 1;

    while (left <= right) {
      if (word[left] !== word[right]) {
        break;
      }
      left++;
      right--;
    }
    if (left > right) {
      return word;
    }
  }
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
