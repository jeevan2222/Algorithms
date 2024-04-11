function same(a1, a2) {
  if (a1.length != a2.length) return false;
  let ob1 = {};
  let ob2 = {};

  for (let ele of a1) {
    ob1[ele] = (ob1[ele] || 0) + 1;
  }
  for (let ele of a1) {
    ob2[ele] = (ob2[ele] || 0) + 1;
  }
  for (key in ob1) {
    if (!(ob1[key] ** 2 in ob2)) {
      return false;
    }
    if (ob1[key] ** 2 !== ob2[key]) return false;
  }
  return true;
}
function same1(num1, num2) {
  if (num1.length != num2.length) return false;
  for (ele of num1) {
    let isFind = num2.indexOf(ele ** 2);
    if (isFind == -1) return false;
    num2.splice(isFind, 1);
  }
  return true;
}

console.log(same1([1, 2, 3, 4, 7, 4], [1, 9, 16, 16, 4, 49]));
