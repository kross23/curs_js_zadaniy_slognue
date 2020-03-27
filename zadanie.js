'use strict';
let num = 266219;
const zadacha = (num)=>{
  let itog = (Math.floor(num/100000) %10) * (Math.floor(num/10000) %10) * (Math.floor(num/1000) %10) * (Math.floor(num/100) %10) * (Math.floor(num/10) %10) * (num % 10);
  let pow = (itog ** 3) ;
  let itogo = String(pow).slice(0,2);
  let chislo = Number.parseInt(itogo);
console.log(chislo);
};
zadacha(num);