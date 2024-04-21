function logest(m) {
  let a = [];
  let s = "";
  for (let i = 0; i < m.length; i++) {
    let char = m[i];
    if (!s.includes(char)) {
      s += char;
    } else {
      a.push(s);
      s = s.slice(s.lastIndexOf(char) + 1) + char;
    }
  }
  a.push(s);
  let maxLength = 0;
  for (let substring of a) {
    if (substring.length > maxLength) {
      maxLength = substring.length;
    }
  }
  return a.length;
}

let s = "shkqbyutdvknyrpjof";

console.log(logest(s));
