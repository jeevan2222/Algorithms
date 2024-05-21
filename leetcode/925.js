var isLongPressedName = function (name, typed) {
  let i = 0;
  let j = 0;
  let x = 0;
  while (name.length > i) {
    if (name[i] === typed[j]) {
      while (typed.length > x) {
        if (typed[x] === typed[x + 1]) {
          j++;
          x++;
        } else {
          break;
        }
      }
      i++;
      j++;
    }
    return false;
  }
  return true;
};

let name = "alex";
let typed = "aaleex";
console.log(isLongPressedName(name, typed));
