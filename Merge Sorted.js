const arr = [1, 2, 3, 4, 5, 6, [7, 8, 9, 10], [11, 12, 13], [14, 15], 16];
let filter = [];

arr.forEach((ele) => {
    if (typeof ele === 'number') {
        filter.push(ele);
    } else {
        ele.forEach((innerEle) => {
            filter.push(innerEle);
        });
    }
});

console.log(filter);
