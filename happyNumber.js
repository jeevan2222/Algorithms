function happyNumber(nums){
    count=0;
while(nums){
    let item=nums/10
    count=item*2
    nums=nums%10
}

console.log(count)
}


happyNumber(81)