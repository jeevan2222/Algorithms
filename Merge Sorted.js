
var merge = function(nums1, m, nums2, n) {


let flterternums1=nums1.filter((ele)=> ele!==0)
let flterternums2=nums2.filter((ele)=> ele!==0)
return flterternums1.concat(flterternums2).sort((a,b)=> a-b)

    
};


let nums1=[1,2,3,0,0,0]
let m=3
let nums2=[3,4,6]
let n=0



console.log(merge(nums1, m, nums2, n))



