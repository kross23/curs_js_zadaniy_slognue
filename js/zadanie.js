'use strict';
/* Создайте функцию, которая принимает 1 аргумент (название произвольное)

— Если в качестве аргумента передана не строка - функция оповещает об этом пользователя

— В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце

— Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...) */
 const foo=(variable)=>{
if(typeof(variable)!=='string'){
  console.log('typeof:',typeof('не строка',variable));
}else{
 variable = variable.trim();
  if(variable.length > 30){
     variable = variable.substring(0,30);
    variable +='...';
    console.log(variable);
  }else{
    console.log(variable);
  }
}
 };
 let a =15;
 let b = '012345678901234567890123456789012345';
 let c = ' abc ';
 foo(a);
 foo(b);
 foo(c);
 
//  let gat = document.getElementById('day');
//  gat.insertAdjacentHTML('beforeEnd',a);
//  gat.insertAdjacentHTML('beforeEnd',b);
//  gat.insertAdjacentHTML('beforeEnd',c);