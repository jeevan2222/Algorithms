var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  console.log(mergedArray);
  mid = Math.floor((mergedArray.length - 1) / 2);
  if (mergedArray.length % 2 == 1) {
    return mergedArray[mid].toFixed(5);
  } else {
    let arr = (mergedArray[mid + 1] + mergedArray[mid]) / 2;
    return arr.toFixed(5);
  }

  console.log(mergedArray);
};

nums1 = [1, 4, 8];
nums2 = [9, 3, 22];
console.log(findMedianSortedArrays(nums1, nums2));
