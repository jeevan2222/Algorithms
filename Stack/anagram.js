// function anagram(num1, num2) {
//   if (num1.length != num2.length) return false;
//   let s1 = num1.split("");
//   let s2 = num2.split("");
//   for (let ele of s1) {
//     let isFind = s2.indexOf(ele);
//     if (isFind == -1) {
//       return false;
//     }
//     s2.splice(isFind, 1);
//   }
//   return true;
// }

// console.log(anagram("sky", "ysk"));

function anagram1(num1, num2) {
  if (num1.length != num2.length) return false;
  let s1 = num1.split("");
  let s2 = num2.split("");
  let ob1 = {};
  let ob2 = {};
  for (let ele of s1) {
    ob1[ele] = (ob1[ele] || 0) + 1;
  }
  for (let ele of s2) {
    ob2[ele] = (ob2[ele] || 0) + 1;
  }
  for (let key in ob1) {
    if (ob1[key] !== ob2[key]) return false;
  }

  return true;
}

console.log(anagram1("sky", "yskk"));
