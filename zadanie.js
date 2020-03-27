'use strict';
let num = 266219;
const zadacha = (num)=>{
  let nuner = 0;
  let b = 1;
  while(num>0){
    let a = num%10;
    num = Math.floor(num/10);
    b = a * b;
  }
  let pow = (b ** 3);
console.log(String(pow).slice(0,2));//21
};
zadacha(num);