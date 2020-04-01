'use strict';


const numero=(arr)=>{
  for(let i=0; i < arr.length; i++){
    let strNum = String(arr[i]).slice(0,1);
    let num = Number.parseInt(strNum);
    if(num ===2 || num ===4 ){
      console.log('arr[i]',arr[i]);
    }
  }
};
let arr = [ 1654,23,287,64,48,235,245,97,41,245,78];
numero(arr);

let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j === 0) {
      continue nextPrime;
    } // не подходит, берём следующее
  }
  console.log( i, 'делитель этого числа 1 и ', i);
}