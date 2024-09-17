function isSorted(n, a) {
    let i=0;
    while(i<n){
      if(a[i]<=a[i+1]){
          i++
      }else{
          return 0
      }
    }
    return 1;
  }
nums=[1,2,3,4,5,1,7,8,9,10]
console.log(isSorted(10,nums));