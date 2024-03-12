


function removeElement(nums, target) {
 let filterArray=nums.filter((ele)=>ele!==target);
 let filter=nums.filter((ele)=>ele==target)

filter.forEach(element => {
    filterArray.push('_')
});
return filterArray
}



let nums = [3,2,2,3];
let val = 3




console.log(removeElement(nums,val))