let numbers=[1,2,3,4,5,6,7,6,9,9,9]
let firstlarge=numbers[0]
let secondlarge=numbers[1]
for(const element of numbers){
    if(element>firstlarge){
        secondlarge=firstlarge
        firstlarge=element
    }else if (element > secondlarge && element < firstlarge) {
        secondlarge = element;
    }
}

console.log(firstlarge ,secondlarge)