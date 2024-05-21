var restoreString = function (s, indices) {
  let l = "";
  for (let i = 0; i < indices.length; i++) {
    let char = indices[i];
    l += s[char];
  }
  return l;
};
(s = "codeleet"), (indices = [4, 5, 6, 7, 0, 2, 1, 3]);
console.log(restoreString(s, indices));
