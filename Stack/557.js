var reverseWords = function (s) {
  let sl = s.split(" ");
  let right = 0;
  let a = [];
  let left = sl.length - 1;
  while (right <= left) {
    a.push(sl[right].split("").reverse().join(""));
    right++;
  }
  return a.join(" ");
};

let s = "Let's take LeetCode contest";

console.log(reverseWords(s));
