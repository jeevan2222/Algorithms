var reverseStr = function (s, k) {
  if (s.length < k) return s.split("").reverse().join(" ");
  let reverse = s.slice(0, k);
  let join = s.slice(k);
  let merge = reverse.split("").reverse().join("");
  return merge + join;
};
console.log(reverseStr("jeevankumar", 3));
