var kthFactor = function (n, k) {
  let value = Math.ceil(n / 2);
  let i = 1;
  let a = [];
  while (i < value) {
    if (n % i == 0) {
      a.push(i);
    }
    i++;
  }
  a.push(n);

  if (a[k - 1]) {
    return a[k - 1];
  } else {
    return -1;
  }
};

n = 12;
k = 3;

console.log(kthFactor(n, 10));
