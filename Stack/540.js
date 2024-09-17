var singleNonDuplicate = function(nums) {
 let obj={ }
for(let i=0;i<nums.length;i++){
    if (obj[nums[i]]) {
        obj[nums[i]] += 1;
    } else {
        obj[nums[i]] = 1;
    }
}
for (let key in obj) {
    if (obj[key] === 1) {
        return parseInt(key);
    }
}

};

nums = [1,1,2,3,3,4,4,8,8]
console.log(singleNonDuplicate(nums))