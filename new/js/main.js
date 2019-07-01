let num = 266219;

let arr = (""+num).split("");
let sum = 1;
for(var i = 0; i < arr.length; i++){
    sum *= arr[i];
    }
console.log(sum);

let digit = sum**3;
let str = digit.toString();
console.log(str.substr(1,2));
