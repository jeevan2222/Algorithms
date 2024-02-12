let array=[1,1,1,1];
let count=0
for(let i=0; i<array.length; i++){
    for(let j=i+1; j<array.length; j++){
        if(array[i]==array[j]){


            ++count;

        }

    }
}




console.log(count)