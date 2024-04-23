var reverseVowels = function (s) {
  let lower = s.split("");
  let vowels = "aeiou";
  let left = 0;
  let right = lower.length - 1;
  while (left < right) {
    if (vowels.includes(lower[left]) && vowels.includes(lower[right])) {
      // Swap vowels
      let temp = lower[left];
      lower[left] = lower[right];
      lower[right] = temp;
      left++;
      right--;
    } else if (!vowels.includes(lower[left])) {
      left++;
    } else if (!vowels.includes(lower[right])) {
      right--;
    }
  }

  return lower.join("");
};

s = "hello";
console.log(reverseVowels(s));
