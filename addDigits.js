var addDigits = function(n) {
    let totalSum = 0;
    while (n > 0) {
        let digit = n % 10;
        totalSum += digit;
        n = Math.floor(n / 10);
    }
    if (totalSum.toString().length > 1) {
        return addDigits(totalSum); // Return the result of the recursive call
    }
    return totalSum;
};

let nums = 38;
console.log("num", addDigits(nums));
