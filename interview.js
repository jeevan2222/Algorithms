let str="Hello World"
let data=str.split(' ')
let json=data.map((ele)=>ele.split('').reverse().join('')).join(' ')
console.log(json)


